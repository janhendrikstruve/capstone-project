import React from 'react'
import { Link } from 'react-router-dom'
import Fingerboard from '../../components/Fingerboard/Fingerboard'
import Heading from '../../components/Heading/Heading'
import styled from 'styled-components'
import FretCounter from '../../components/Fret/FretCounter'
import {
  PlusIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  ChordFolderIcon,
  SearchIcon,
} from '../../components/Icons/IconList'
import type { fingerboardDataType } from '../../types'
import useStickyState from '../../components/hooks/stickyState/stickyState'
import type { savedChordType } from '../../types'
import { nanoid } from 'nanoid'

type DashboardTypes = {
  savedChords: savedChordType[]
  setSavedChords: (value: savedChordType[]) => void
}

export default function Dashboard({
  savedChords,
  setSavedChords,
}: DashboardTypes): JSX.Element {
  const [pressed, setPressed] = useStickyState<fingerboardDataType>(
    {
      e2: 3,
      b: 0,
      g: 0,
      d: 0,
      a: 2,
      e: 3,
    },
    'fingerboardData'
  )
  const [fretOffset, setFretOffset] = useStickyState(0, 'fretOffset')
  const [chordInput, setChordInput] = useStickyState('G Major', 'chordInput')

  function handleStringClick(column: number, row: number) {
    const newPressed = { ...pressed }
    const pressedFret = ++row + fretOffset
    if (column === 0) {
      if (newPressed.e === pressedFret) newPressed.e = 0
      else newPressed.e = pressedFret
    }
    if (column === 1) {
      if (newPressed.a === pressedFret) newPressed.a = 0
      else newPressed.a = pressedFret
    }
    if (column === 2) {
      if (newPressed.d === pressedFret) newPressed.d = 0
      else newPressed.d = pressedFret
    }
    if (column === 3) {
      if (newPressed.g === pressedFret) newPressed.g = 0
      else newPressed.g = pressedFret
    }
    if (column === 4) {
      if (newPressed.b === pressedFret) newPressed.b = 0
      else newPressed.b = pressedFret
    }
    if (column === 5) {
      if (newPressed.e2 === pressedFret) newPressed.e2 = 0
      else newPressed.e2 = pressedFret
    }
    setPressed(newPressed)
  }

  function handleFretOffset(
    event: React.MouseEvent<HTMLButtonElement>,
    direction: boolean
  ) {
    event.preventDefault()
    let newFretOffset = fretOffset
    if (direction && newFretOffset >= 1) newFretOffset--
    if (!direction && newFretOffset <= 15) newFretOffset++
    setFretOffset(newFretOffset)
  }

  function isStringPressed() {
    if (Object.values(pressed).find((string) => string > 0)) return true
    return false
  }

  async function handleSafe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (chordInput && isStringPressed()) {
      const newChord = {
        chord: pressed,
        name: chordInput,
        offset: fretOffset,
        id: nanoid(),
      }
      setSavedChords([newChord, ...savedChords])
      const res = await fetch('/api/savedchords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newChord),
      })
      if (res.ok) {
        console.log(`${newChord.name} successfully written`)
      } else {
        console.error(
          'Sie Idiot, sie haben den Wasserstofftank in die Luft gejagt'
        )
      }
    } else if (chordInput.length) alert('Press at least one String')
    else if (isStringPressed()) alert('Give your Chord a Name')
    else alert('Give your Chord a Name and press at least one String')
  }

  return (
    <SaveChord>
      <Heading>Save Chords</Heading>
      <ChordForm onSubmit={handleSafe}>
        <label htmlFor="chords" />
        <ChordNameInput
          type="text"
          id="chords"
          onChange={(event) => setChordInput(event.target.value)}
          placeholder="Name"
          value={chordInput}
          maxLength={10}
        />
        <FingerboardFunctions>
          <FretCounter start={fretOffset + 1} end={fretOffset + 4} />
          <Fingerboard
            onClick={handleStringClick}
            pressed={pressed}
            offset={fretOffset}
          ></Fingerboard>
          <Buttons>
            <ArrowButton onClick={(event) => handleFretOffset(event, true)}>
              <ArrowUpIcon fill="var(--c-brown)" />
            </ArrowButton>
            <Button>
              <PlusIcon
                fill={
                  !chordInput || !isStringPressed() ? 'var(--c-grey)' : 'brown'
                }
              />
            </Button>
            <ArrowButton onClick={(event) => handleFretOffset(event, false)}>
              <ArrowDownIcon fill="var(--c-brown)" />
            </ArrowButton>
          </Buttons>
          <Links>
            <ChordFolderButton to={'/chordfolder'}>
              <ChordFolderIcon fill="var(--c-brown)"></ChordFolderIcon>
            </ChordFolderButton>
            <ChordFolderButton to={'/SearchingResults'}>
              <SearchIcon stroke="var(--c-brown)"></SearchIcon>
            </ChordFolderButton>
          </Links>
        </FingerboardFunctions>
      </ChordForm>
    </SaveChord>
  )
}

const SaveChord = styled.main`
  display: grid;
  justify-items: center;
`

const FingerboardFunctions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 50px;
`

const ArrowButton = styled(Button)`
  width: 40px;
`

const ChordForm = styled.form`
  display: grid;
  justify-items: center;
  transform: scale(1.5);
  transform-origin: center top;
  margin-top: 30px;
`

const ChordNameInput = styled.input`
  width: 120px;
  border: 2px solid var(--c-brown);
  border-radius: 2px;
  background-color: var(--c-beige);
  text-align: center;
`

const ChordFolderButton = styled(Link)`
  background: var(--c-beige);
  border: 2px solid var(--c-brown);
  cursor: pointer;
  padding: 4px 0 4px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
`

const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2px;
`

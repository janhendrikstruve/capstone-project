import React from 'react'
import Fingerboard from '../../components/Fingerboard/Fingerboard'
import { fingerboardData } from '../../data/fingerboardData/fingerboardData'
import Heading from '../../components/Heading/Heading'
import styled from 'styled-components'
import FretCounter from '../../components/Fret/FretCounter'
import {
  PlusIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from '../../components/Icons/IconList'
import type { fingerboardDataType } from '../../types'
import useStickyState from '../../components/hooks/stickystate'

export default function Dashboard(): JSX.Element {
  const [pressed, setPressed] = useStickyState(
    fingerboardData,
    'fingerboardData'
  )
  const [fretOffset, setFretOffset] = useStickyState(0, 'fretOffset')
  const [savedChords, setSavedChords] = useStickyState<
    {
      chord: fingerboardDataType
      name: string
      offset: number
    }[]
  >([], 'savedChords')
  const [chordInput, setChordInput] = useStickyState('', 'chordInput')

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

  function handleSafe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (chordInput && isStringPressed()) {
      const newChord = {
        chord: pressed,
        name: chordInput,
        offset: fretOffset,
      }
      setSavedChords([newChord, ...savedChords])
    } else if (chordInput.length) alert('Press at least one String')
    else if (isStringPressed()) alert('Give your Chord a Name')
    else alert('Give your Chord a Name and press at least one String')
  }

  function renderSavedChords() {
    return (
      savedChords &&
      savedChords.map(
        (
          {
            chord,
            name,
            offset,
          }: {
            chord: fingerboardDataType
            name: string
            offset: number
          },
          index: number
        ) => (
          <li key={index}>
            <ChordName>{name}</ChordName>
            <FretCounter start={offset + 1} end={offset + 4} />
            <Fingerboard pressed={chord} offset={offset} />
          </li>
        )
      )
    )
  }

  return (
    <StyledMain>
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
              <ArrowUpIcon fill="brown" />
            </ArrowButton>
            <Button>
              <PlusIcon
                fill={!chordInput || !isStringPressed() ? '#6a6a6a' : 'brown'}
              />
            </Button>
            <ArrowButton onClick={(event) => handleFretOffset(event, false)}>
              <ArrowDownIcon fill="brown" />
            </ArrowButton>
          </Buttons>
        </FingerboardFunctions>
      </ChordForm>
      <ChordList role="list">{renderSavedChords()}</ChordList>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  display: grid;
  justify-items: center;
  grid-gap: 16px;
`

const FingerboardFunctions = styled.div`
  display: flex;
  flex-direction: column;
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

const ChordName = styled.h2`
  color: brown;
`

const ChordForm = styled.form`
  display: grid;
  justify-items: center;
`

const ChordNameInput = styled.input`
  width: 120px;
  border: 2px solid brown;
  border-radius: 2px;
  background-color: #ffddbd;
  text-align: center;
`

const ChordList = styled.ul`
  padding: 0;
`

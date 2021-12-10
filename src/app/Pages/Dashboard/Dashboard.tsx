import React from 'react'
import { useState } from 'react'
import Fingerboard from '../../components/Fingerboard/Fingerboard'
import { fingerboardData } from '../../data/fingerboardData/fingerboardData'
import Heading from '../../components/Heading/Heading'
import styled from 'styled-components'
import FretCounter from '../../components/Fret/FretCounter'
import ArrowButton from '../../components/ArrowButton/ArrowButton'
import { Plus } from '../../components/Icons/IconList'
import type { fingerboardDataType } from '../../types'

export default function Dashboard(): JSX.Element {
  const [pressed, setPressed] = useState(fingerboardData)
  const [fretOffset, setFretOffset] = useState(0)
  const [savedChords, setSavedChords] = useState<
    {
      chord: fingerboardDataType
      name: string
    }[]
  >([])
  const [chordInput, setChordInput] = useState('')

  function handleClick(column: number, row: number) {
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

  function handleFretOffset(direction: boolean) {
    let newFretOffset = fretOffset
    if (direction && newFretOffset >= 1) newFretOffset--
    if (!direction && newFretOffset <= 15) newFretOffset++
    setFretOffset(newFretOffset)
  }

  function handleSafe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const newChord = {
      chord: pressed,
      name: chordInput,
    }

    const oldChords = savedChords
    setSavedChords([...oldChords, newChord])
  }

  function renderSavedChords() {
    console.log(savedChords)
    return (
      savedChords &&
      savedChords.map(
        ({
          chord,
          name,
          offset,
        }: {
          chord: fingerboardDataType
          name: string
          offset: number
        }) => (
          <>
            <ChordName>{name}</ChordName>
            <Fingerboard pressed={chord} offset={offset} />
          </>
        )
      )
    )
  }

  return (
    <StyledMain>
      <Heading>Note Chord</Heading>
      <ChordForm onSubmit={handleSafe}>
        <ChordNameInput
          type="text"
          id="chords"
          onChange={(event) => setChordInput(event.target.value)}
          placeholder="Name"
          value={chordInput}
        />
        <br />
      <FingerboardFunctions>
        <Fingerboard
            onClick={handleClick}
          pressed={pressed}
          offset={fretOffset}
        ></Fingerboard>
        <Arrows>
          <ArrowButton
            direction={true}
              onClick={handleFretOffset}
          ></ArrowButton>
          <FretCounter start={fretOffset + 1} end={fretOffset + 4} />
          <ArrowButton
            direction={false}
              onClick={handleFretOffset}
          ></ArrowButton>
        </Arrows>
      </FingerboardFunctions>

        <label htmlFor="chords" />

        <SafeButton>
          <Plus />
        </SafeButton>
      </ChordForm>

      {renderSavedChords()}
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

const Arrows = styled.div`
  display: flex;
  justify-content: space-between;
`

const SafeButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 50px;
`

const ChordName = styled.h2``

const ChordForm = styled.form`
  display: grid;
  justify-items: center;
`

const ChordNameInput = styled.input`
  width: 120px;
`

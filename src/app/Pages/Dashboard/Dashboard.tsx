import React from 'react'
import { useState } from 'react'
import Fingerboard from '../../components/Fingerboard/Fingerboard'
import { fingerboardData } from '../../data/fingerboardData/fingerboardData'
import Heading from '../../components/Heading/Heading'
import styled from 'styled-components'
import FretCounter from '../../components/Fret/FretCounter'
import ArrowButton from '../../components/ArrowButton/ArrowButton'
import { Plus } from '../../components/Icons/IconList'
import type { Thing } from '../../types'

export default function Dashboard(): JSX.Element {
  const [pressed, setPressed] = useState(fingerboardData)
  const [fretOffset, setFretOffset] = useState(0)
  const [savedChords, setSavedChords] = useState<Thing[]>([])

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

  function handleSafe() {
    const newSavedChords = [pressed, ...savedChords]
    setSavedChords(newSavedChords)
  }

  function renderSavedChords() {
    console.log(savedChords)
    if (savedChords)
      return savedChords.map((chord: Thing) => (
        <Fingerboard pressed={chord} offset={0} />
      ))
    else return <></>
  }

  return (
    <StyledMain>
      <Heading>Note Chord</Heading>
      <FingerboardFunctions>
        <Fingerboard
          handleClick={handleClick}
          pressed={pressed}
          offset={fretOffset}
        ></Fingerboard>
        <Arrows>
          <ArrowButton
            direction={true}
            handleClick={handleFretOffset}
          ></ArrowButton>
          <FretCounter start={fretOffset + 1} end={fretOffset + 4} />
          <ArrowButton
            direction={false}
            handleClick={handleFretOffset}
          ></ArrowButton>
        </Arrows>
      </FingerboardFunctions>
      <SafeButton onClick={handleSafe}>
        <Plus />
      </SafeButton>
      {renderSavedChords()}
    </StyledMain>
  )
}

const StyledMain = styled.main`
  display: grid;
  justify-items: center;
  grid-template-rows: auto auto;
  grid-gap: 16px;
`

const FingerboardFunctions = styled.div`
  display: flex;
`

const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SafeButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 50px;
`

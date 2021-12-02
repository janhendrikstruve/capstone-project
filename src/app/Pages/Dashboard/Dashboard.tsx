import React from 'react'
import { useState } from 'react'
import Fingerboard from '../../components/Fingerboard/Fingerboard'
import { fingerboardData } from '../../data/fingerboardData/fingerboardData'
import Heading from '../../components/Heading/Heading'
import styled from 'styled-components'
import Fret from '../../components/Fret/Fret'
import ArrowButton from '../../components/ArrowButton/ArrowButton'

export default function Dashboard(): JSX.Element {
  const [pressed, setPressed] = useState(fingerboardData)
  const [fretOffset, setFretOffset] = useState(0)

  function handleClick(column: number, row: number) {
    const newPressed = { ...pressed }
    const pressedFret = ++row + fretOffset
    if (column === 0) newPressed.e = pressedFret
    if (column === 1) newPressed.a = pressedFret
    if (column === 2) newPressed.d = pressedFret
    if (column === 3) newPressed.g = pressedFret
    if (column === 4) newPressed.b = pressedFret
    if (column === 5) newPressed.e2 = pressedFret
    console.log(newPressed)
    setPressed(newPressed)
  }

  function handleFretOffset(direction: boolean) {
    let newFretOffset = fretOffset
    if (direction && newFretOffset >= 1) newFretOffset--
    if (!direction && newFretOffset <= 15) newFretOffset++
    setFretOffset(newFretOffset)
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
          <StyledFret start={fretOffset + 1} end={fretOffset + 4}></StyledFret>
          <ArrowButton
            direction={false}
            handleClick={handleFretOffset}
          ></ArrowButton>
        </Arrows>
      </FingerboardFunctions>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  display: grid;
  justify-items: center;
  grid-template-rows: auto auto;
  grid-gap: 1rem;
`

const FingerboardFunctions = styled.div`
  display: flex;
`

const StyledFret = styled(Fret)``

const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

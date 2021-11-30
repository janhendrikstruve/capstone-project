import React from 'react'
import { useState } from 'react'
import Fingerboard from '../../components/Fingerboard/Fingerboard'
import { fingerboardData } from '../../data/fingerboardData/fingerboardData'
import Heading from '../../components/Heading/Heading'
import styled from 'styled-components'

export default function Dashboard(): JSX.Element {
  const [pressed, setPressed] = useState(fingerboardData)
  function handleClick(column: number, row: number) {
    const newData = { ...pressed }
    if (column === 0) newData.e = ++row
    if (column === 1) newData.a = ++row
    if (column === 2) newData.d = ++row
    if (column === 3) newData.g = ++row
    if (column === 4) newData.b = ++row
    if (column === 5) newData.e2 = ++row
    console.log(newData)
    setPressed(newData)
  }

  return (
    <StyledMain>
      <Heading>Note Chord</Heading>
      <Fingerboard handleClick={handleClick} pressed={pressed}></Fingerboard>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  display: grid;
  justify-items: center;
  grid-template-rows: 100px auto;
`

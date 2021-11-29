import React from 'react'
import { useState } from 'react'
import Fingerboard from '../../components/Fingerboard/Fingerboard'
import { FingerboardData } from '../../data/FingerboardData/FingerboardData'

export default function Dashboard(): JSX.Element {
  const [pressed, setPressed] = useState(FingerboardData)
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

  return <Fingerboard handleClick={handleClick} pressed={pressed}></Fingerboard>
}

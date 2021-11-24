import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Fingerboard from './components/Fingerboard/Fingerboard'

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Fingerboard></Fingerboard>
    </BrowserRouter>
  )
}

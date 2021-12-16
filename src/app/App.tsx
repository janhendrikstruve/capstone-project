import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import ChordFolder from './Pages/ChordFolder/ChordFolder.tsx'

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chordfolder" element={<ChordFolder />} />
      </Routes>
    </BrowserRouter>
  )
}

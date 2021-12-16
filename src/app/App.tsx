import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import ChordFolder from './Pages/ChordFolder/ChordFolder'
import type { savedChordType } from './types'
import useStickyState from './components/hooks/stickyState/stickyState'

export default function App(): JSX.Element {
  const [savedChords, setSavedChords] = useStickyState<savedChordType[]>([], 'savedChords')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard savedChords={savedChords} setSavedChords={setSavedChords} />} />
        <Route
          path="/chordfolder"
          element={<ChordFolder savedChords={savedChords} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

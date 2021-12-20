import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import ChordFolder from './Pages/ChordFolder/ChordFolder'
import type { savedChordType } from './types'
import useStickyState from './components/hooks/stickyState/stickyState'
import useFetch from './components/hooks/useFetch/useFetch'

export default function App(): JSX.Element {
  const [savedChords, setSavedChords] = useStickyState<savedChordType[]>(
    [],
    'savedChords'
  )
  const fetchedSavedChords = useFetch<savedChordType[] | null>(
    '/api/savedchords/'
  )

  useEffect(() => {
    console.log(fetchedSavedChords)
    fetchedSavedChords ? setSavedChords(fetchedSavedChords) : setSavedChords([])
  }, [fetchedSavedChords])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              savedChords={savedChords}
              setSavedChords={setSavedChords}
            />
          }
        />
        <Route
          path="/chordfolder"
          element={
            <ChordFolder
              savedChords={savedChords}
              setSavedChords={setSavedChords}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

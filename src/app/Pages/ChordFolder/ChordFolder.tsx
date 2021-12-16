import React from 'react'
import Fingerboard from '../../components/Fingerboard/Fingerboard'
import FretCounter from '../../components/Fret/FretCounter'
import type { savedChordType } from '../../types'
import styled from 'styled-components'

type ChordfolderTypes = {
  savedChords: savedChordType[]
}

export default function ChordFolder({
  savedChords,
}: ChordfolderTypes): JSX.Element {
  function renderSavedChords() {
    return (
      savedChords &&
      savedChords.map(
        ({ chord, name, offset }: savedChordType, index: number) => (
          <Chord key={index}>
            <BoardWithCounter>
              <ChordName>{name}</ChordName>
              <FretCounter start={offset + 1} end={offset + 4} />
            </BoardWithCounter>
            <Fingerboard pressed={chord} offset={offset} />
          </Chord>
        )
      )
    )
  }

  return <ChordList role="list">{renderSavedChords()}</ChordList>
}

const ChordList = styled.ul`
  padding: 0;
  display: grid;
  justify-items: center;
  grid-gap: 40px;
`

const ChordName = styled.h2`
  color: brown;
`

const Chord = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  position: relative;
  grid-gap: 20px;
`

const BoardWithCounter = styled.div`
  &:after {
    content: ' ';
    border: 2px solid #fff459;
    pointer-events: none;
    position: absolute;
    margin: auto;
    width: 90%;
    left: 5%;
    top: -15px;
  }
`

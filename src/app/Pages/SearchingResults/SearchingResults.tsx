import { useState, useEffect } from 'react'
import React from 'react'
import Fingerboard from '../../components/Fingerboard/Fingerboard'
import FretCounter from '../../components/Fret/FretCounter'
import type { savedChordType, fetchedChordType } from '../../types'
import styled, { css } from 'styled-components'
import { BackIcon } from '../../components/Icons/IconList'
import { Link } from 'react-router-dom'
import Heading from '../../components/Heading/Heading'
import Axios from 'axios'

export default function SearchingResults(): JSX.Element {
  const [rawFetchedChords, setRawFetchedChords] = useState<fetchedChordType[]>(
    []
  )

  useEffect(() => {
    async function getChords() {
      const chords = await Axios.get(
        `https://api.uberchord.com/v1/chords?nameLike=C`
      )
      console.log(chords)
      setRawFetchedChords(chords.data)
    }

    getChords()
  }, [])

  function renderFetchedChords() {
    const fetchedChords = rawFetchedChords.map((chord: fetchedChordType) => {
      const stringsinOneString = chord.strings.split(' ')
      const strings = stringsinOneString.map((string: string) =>
        parseInt(string)
      )
      const grabbedStrings = strings.filter((string: number) => string > 0)
      const offset = Math.min(...grabbedStrings)
      return {
        chord: {
          e2: strings[5],
          b: strings[4],
          g: strings[3],
          d: strings[2],
          a: strings[1],
          e: strings[0],
        },
        name: chord.chordName,
        offset: offset,
        id: chord.voicingID,
      }
    })

    return (
      fetchedChords &&
      fetchedChords.map(
        ({ chord, offset, name }: savedChordType, index: number) => (
          <Chord key={index}>
            <Fingerboard pressed={chord} offset={offset} />
            <ChordInfo index={index}>
              <ChordName>{name}</ChordName>
              <FretCounter start={offset + 1} end={offset + 4} />
            </ChordInfo>
          </Chord>
        )
      )
    )
  }

  return (
    <>
      <Heading>Results</Heading>
      <BackToInputLink to={'/'}>
        <StyledBackIcon fill="var(--c-brown)"></StyledBackIcon>
      </BackToInputLink>
      <ChordList role="list">{renderFetchedChords()}</ChordList>
    </>
  )
}

const ChordList = styled.ul`
  padding: 0;
  display: grid;
  justify-items: center;
  grid-gap: 50px;
`

const ChordName = styled.h2`
  color: var(--c-brown);
`

const Chord = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  position: relative;
`

const ChordInfo = styled.div<{ index: number }>`
  display: grid;
  justify-items: center;
  ${({ index }) =>
    index &&
    css`
      &:after {
        content: ' ';
        border: 3px solid var(--c-brown);
        pointer-events: none;
        position: absolute;
        width: 95%;
        left: 2.5%;
        top: -28px;
        border-radius: 4px;
      }
    `}
`
const BackToInputLink = styled(Link)`
  cursor: pointer;
`

const StyledBackIcon = styled(BackIcon)`
  width: 50px;
  position: absolute;
  top: 0px;
  left: 4px;
`

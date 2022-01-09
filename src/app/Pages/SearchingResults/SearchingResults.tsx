import React from 'react'
import Fingerboard from '../../components/Fingerboard/Fingerboard'
import FretCounter from '../../components/Fret/FretCounter'
import type { savedChordType, fetchedChordType } from '../../types'
import styled, { css } from 'styled-components'
import { BackIcon } from '../../components/Icons/IconList'
import { Link } from 'react-router-dom'
import Heading from '../../components/Heading/Heading'
import useFetch from '../../components/hooks/useFetch/useFetch'
import { nanoid } from 'nanoid'

export default function ChordFolder(): JSX.Element {
  function renderSavedChords() {
    const chordsToDisplay = fetchChords()
    return (
      chordsToDisplay &&
      chordsToDisplay.map(
        ({ chord, name, offset }: savedChordType, index: number) => (
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

  function fetchChords() {
    const fetchedChords = useFetch<fetchedChordType>(
      'http://pargitaru.id.lv/api/'
    )
    console.log(fetchedChords)
    return (
      fetchedChords &&
      fetchedChords.chords.map((chord) => {
        //const modf = chord.modf
        return {
          chord: {
            e2: chord.e2,
            b: chord.b,
            g: chord.g,
            d: chord.e2,
            a: chord.e2,
            e: chord.e2,
          },
          name: chord.chord,
          offset: 0,
          id: nanoid(),
        }
      })
    )
  }

  return (
    <>
      <Heading>Results</Heading>
      <BackToInputLink to={'/'}>
        <StyledBackIcon fill="var(--c-brown)"></StyledBackIcon>
      </BackToInputLink>
      <ChordList role="list">{renderSavedChords()}</ChordList>
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

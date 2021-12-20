import React from 'react'
import Fingerboard from '../../components/Fingerboard/Fingerboard'
import FretCounter from '../../components/Fret/FretCounter'
import type { savedChordType } from '../../types'
import styled, { css } from 'styled-components'
import { BackIcon } from '../../components/Icons/IconList'
import { Link } from 'react-router-dom'
import Heading from '../../components/Heading/Heading'

export default function ChordFolder(): JSX.Element {
  const foundChords = [
    {
      id: '1',
      chord: {
        e2: 0,
        b: 1,
        g: 0,
        d: 2,
        a: 3,
        e: 0,
      },
      name: 'C Major',
      offset: 0,
    },
    {
      id: '2',
      chord: {
        e2: 3,
        b: 0,
        g: 0,
        d: 0,
        a: 2,
        e: 3,
      },
      name: 'G Major',
      offset: 0,
    },
    {
      id: '3',
      chord: {
        e2: 2,
        b: 3,
        g: 2,
        d: 0,
        a: 0,
        e: 0,
      },
      name: 'D Major',
      offset: 0,
    },
  ]

  function renderSavedChords() {
    return foundChords.map(
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
  }

  return (
    <>
      <Heading>Chord Folder</Heading>
      <BackToInputButton to={'/'}>
        <StyledBackIcon fill="brown"></StyledBackIcon>
      </BackToInputButton>
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
  color: brown;
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
        border: 3px solid brown;
        pointer-events: none;
        position: absolute;
        width: 95%;
        left: 2.5%;
        top: -28px;
        border-radius: 4px;
      }
    `}
`
const BackToInputButton = styled(Link)`
  cursor: pointer;
`

const StyledBackIcon = styled(BackIcon)`
  width: 50px;
  position: absolute;
  top: 0px;
  left: 4px;
`

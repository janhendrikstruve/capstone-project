import React from 'react'
import Fingerboard from '../../components/Fingerboard/Fingerboard'
import FretCounter from '../../components/Fret/FretCounter'
import type { savedChordType } from '../../types'
import styled, { css } from 'styled-components'
import { TrashIcon, BackIcon } from '../../components/Icons/IconList'
import { Link } from 'react-router-dom'
import Heading from '../../components/Heading/Heading'

type ChordFolderTypes = {
  savedChords: savedChordType[]
  setSavedChords: (value: savedChordType[]) => void
}

export default function ChordFolder({
  savedChords,
  setSavedChords,
}: ChordFolderTypes): JSX.Element {
  function renderSavedChords() {
    return (
      savedChords &&
      savedChords.map(
        ({ chord, name, offset }: savedChordType, index: number) => (
          <Chord key={index}>
            <Fingerboard pressed={chord} offset={offset} />
            <ChordInfo index={index}>
              <ChordName>{name}</ChordName>
              <FretCounter start={offset + 1} end={offset + 4} />

              <DeleteButton onClick={() => handleDelete(index)}>
                <TrashIcon stroke="#ffddbd"></TrashIcon>
              </DeleteButton>
            </ChordInfo>
          </Chord>
        )
      )
    )
  }

  function handleDelete(index: number) {
    const newSavedChords = [...savedChords]
    newSavedChords.splice(index, 1)
    setSavedChords(newSavedChords)
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

const DeleteButton = styled.button`
  background: brown;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 30px;
  height: 30px;
  padding: 2px;
  border-radius: 4px;
  justify-self: center;
  margin-top: 20px;
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
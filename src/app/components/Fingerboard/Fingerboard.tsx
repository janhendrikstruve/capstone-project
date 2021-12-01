import React from 'react'
import styled from 'styled-components'
import { Fingerprint } from '../Icons/IconList'

type fingerboardProps = {
  handleClick?: (columnIndex: number, rowIndex: number) => void
  pressed: { e: number; a: number; d: number; g: number; b: number; e2: number }
}
export default function Fingerboard({
  handleClick,
  pressed,
}: fingerboardProps): JSX.Element {
  const board = Array(6).fill(Array(4).fill(null))

  function renderClicked(columnIndex: number, rowIndex: number): JSX.Element {
    rowIndex++
    if (columnIndex === 0 && rowIndex === pressed.e) {
      return <PressIcon />
    }
    if (columnIndex === 1 && rowIndex === pressed.a) {
      return <PressIcon />
    }
    if (columnIndex === 2 && rowIndex === pressed.d) {
      return <PressIcon />
    }
    if (columnIndex === 3 && rowIndex === pressed.g) {
      return <PressIcon />
    }
    if (columnIndex === 4 && rowIndex === pressed.b) {
      return <PressIcon />
    }
    if (columnIndex === 5 && rowIndex === pressed.e2) {
      return <PressIcon />
    } else {
      return <></>
    }
  }
  return (
    <Board>
      {board.map((column, columnIndex) => (
        <YPosition key={columnIndex}>
          {column.map((_checked: boolean, rowIndex: number) => (
            <XYPosition
              key={rowIndex}
              onClick={() => {
                if (handleClick) handleClick(columnIndex, rowIndex)
              }}
            >
              <Guitarstring></Guitarstring>
              {renderClicked(columnIndex, rowIndex)}
            </XYPosition>
          ))}
        </YPosition>
      ))}
    </Board>
  )
}

const Board = styled.section`
  &:after {
    content: ' ';
    position: absolute;
    top: 2px;
    left: 0px;
    right: 0px;
    border-top: 3px solid brown;
  }
  position: relative;
  display: flex;
  flex-direction: row;
  border: 3px solid brown;
  width: fit-content;
  background-color: #202020;
`

const YPosition = styled.span`
  display: grid;
  grid-gap: 2px;
`
const XYPosition = styled.div`
  padding: 0 10px;
  background-color: #ffddbd;
  position: relative;
`
const Guitarstring = styled.div`
  padding: 20px 0;
  border: 1px solid #b47601;
`
const PressIcon = styled(Fingerprint)`
  position: absolute;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0.6rem;
`

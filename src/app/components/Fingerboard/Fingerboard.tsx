import React from 'react'
import styled, { css } from 'styled-components'
import { FingerprintIcon } from '../Icons/IconList'
import type { fingerboardDataType } from '../../types'

type fingerboardProps = {
  onClick?: (columnIndex: number, rowIndex: number) => void
  pressed: fingerboardDataType
  offset: number
}
export default function Fingerboard({
  onClick,
  pressed,
  offset,
}: fingerboardProps): JSX.Element {
  const board = Array(6).fill(Array(4).fill(null))

  function renderClicked(
    columnIndex: number,
    relativeRowIndex: number
  ): JSX.Element {
    const rowIndex = relativeRowIndex + offset + 1

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
    <Board offset={offset}>
      {board.map((column, columnIndex) => (
        <YPosition key={columnIndex}>
          {column.map((_checked: boolean, rowIndex: number) => (
            <XYPosition
              key={rowIndex}
              onClick={() => {
                if (onClick) onClick(columnIndex, rowIndex)
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

const Board = styled.section<Partial<fingerboardProps>>`
  ${({ offset }) =>
    !offset &&
    css`
      &:after {
        content: ' ';
        position: absolute;
        top: 2px;
        left: 0px;
        right: 0px;
        border-top: 3px solid var(--c-brown);
        pointer-events: none;
      }
    `}

  position: relative;
  display: flex;
  flex-direction: row;
  border: 3px solid var(--c-brown);
  width: fit-content;
  background-color: #202020;
  border-radius: 2px;
`

const YPosition = styled.span`
  display: grid;
  grid-gap: 2px;
`
const XYPosition = styled.div`
  padding: 0 10px;
  background-color: var(--c-beige);
  position: relative;
`
const Guitarstring = styled.div`
  padding: 20px 0;
  border: 1px solid var(--c-brass);
  background: var(--c-brass);
`
const PressIcon = styled(FingerprintIcon)`
  position: absolute;
  z-index: 100;
  left: 0;
  right: 0;
  top: 10px;
`

import React from 'react'
import styled from 'styled-components'
import { ArrowDown, ArrowUp } from '../Icons/Arrows'

export default function ArrowButton({
  direction,
  onClick,
}: {
  direction: boolean
  onClick: (
    direction: boolean,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void
}): JSX.Element {
  return (
    <StyledButton onClick={(event) => onClick(direction, event)}>
      {direction ? <ArrowUp /> : <ArrowDown />}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  outline: inherit;
  width: 40px;
  cursor: pointer;
`

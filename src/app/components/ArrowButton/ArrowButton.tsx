import React from 'react'
import styled from 'styled-components'
import { ArrowDown, ArrowUp } from '../../icons/Arrow'

export default function ArrowButton({
  direction,
}: {
  direction: string
}): JSX.Element {
  return (
    <StyledButton>
      {direction === 'up' ? <ArrowUp /> : <ArrowDown />}
    </StyledButton>
  )
}

const StyledButton = styled.button``

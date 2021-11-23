import type { ReactNode } from 'react'
import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  children: ReactNode
}
export default function Button({ children }: ButtonProps): JSX.Element {
  return <StyledButton>{children}</StyledButton>
}

const StyledButton = styled.button`
  .button {
    color: #000;
    background: linear-gradient(180deg, #ffbb3b, #ffa90a);
    font-size: 0.8em;
    padding: 0.8em 2em;
    border: none;
    border-radius: 0.4em;
    text-transform: uppercase;
  }
`

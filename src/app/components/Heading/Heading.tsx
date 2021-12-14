import React from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'

export default function Heading({
  children,
}: {
  children?: ReactNode
}): JSX.Element {
  return <StyledH1>{children}</StyledH1>
}

const StyledH1 = styled.h1`
  color: #111;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  background-color: #fff459;
`

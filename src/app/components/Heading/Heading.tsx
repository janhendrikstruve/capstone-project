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
  color: brown;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  background-color: #ffddbd;
  margin-bottom: 30px;
  border-bottom: 4px solid brown; ;
`

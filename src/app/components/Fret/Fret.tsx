import styled from 'styled-components'
import React from 'react'
import type { ReactNode } from 'react'

export default function Fret({
  start,
  end,
}: {
  start: number
  end: number
}): JSX.Element {
  return (
    <StyledDiv>
      Fret: <br />
      {start} - {end}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  border: 1px solid steelblue;
  display: inline-block;
  align-self: center;
  padding: 2px 2px;
  border-radius: 4px;
  background-color: #fff459; ;
`

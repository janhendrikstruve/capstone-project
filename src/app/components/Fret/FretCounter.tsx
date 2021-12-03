import styled from 'styled-components'
import React from 'react'

export default function FretCounter({
  start,
  end,
}: {
  start: number
  end: number
}): JSX.Element {
  return (
    <StyledDiv>
      Frets: <br />
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
  background-color: #fff459;
`

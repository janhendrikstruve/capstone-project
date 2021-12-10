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
      Frets:
      {start} - {end}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  align-self: center;
  font-weight: bold;
  color: brown;
`

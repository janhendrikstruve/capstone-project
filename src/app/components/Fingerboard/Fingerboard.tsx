import React from 'react'
import styled from 'styled-components'

export default function Fingerboard(): JSX.Element {
  const board = Array(6).fill(Array(20).fill(null))

  return (
    <StyledSection>
      {board.map((string) => (
        <StyledSpan>
          {string.map(() => (
            <StyledDiv></StyledDiv>
          ))}
        </StyledSpan>
      ))}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  border: 2px solid brown;
  width: fit-content;
`

const StyledSpan = styled.span``

const StyledDiv = styled.div`
  padding: 20px 10px;
  border-top: 2px solid black;
`

import React from 'react'
import styled from 'styled-components'

export default function Fingerboard(): JSX.Element {
  const board = Array(6).fill(Array(20).fill(null))

  return (
    <StyledSection>
      {board.map((string) => (
        <StyledSpan>
          {string.map(() => (
            <StyledDiv>
              <Guitarstring></Guitarstring>
            </StyledDiv>
          ))}
        </StyledSpan>
      ))}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  &:after {
    content: ' ';
    position: absolute;
    z-index: +11;
    top: 2px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border-top: 3px solid brown;
  }
  position: relative;
  display: flex;
  flex-direction: row;
  border: 3px solid brown;
  width: fit-content;
  background-color: #202020;
`

const StyledSpan = styled.span`
  display: grid;
  grid-gap: 2px;
`

const StyledDiv = styled.div`
  padding: 0 10px;
  background-color: #ffddbd;
`
const Guitarstring = styled.div`
  padding: 20px 0;
  border: 1px solid #b47601;
`

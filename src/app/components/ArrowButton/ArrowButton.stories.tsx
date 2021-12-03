import React from 'react'
import ArrowButton from './ArrowButton'

export default {
  title: 'Arrow Button',
  component: ArrowButton,
}

export const up = (): JSX.Element => (
  <ArrowButton direction={true} handleClick={() => undefined} />
)
export const down = (): JSX.Element => (
  <ArrowButton direction={false} handleClick={() => undefined} />
)

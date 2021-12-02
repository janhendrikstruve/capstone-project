import React from 'react'
import ArrowButton from './ArrowButton'

export default {
  title: 'Arrow Button',
  component: ArrowButton


export const up = (): JSX.Element => <ArrowButton direction={true} handleClick={() => void}/>
export const down = (): JSX.Element => <Arrowbutton direction={false} handleClick={() => void}/>
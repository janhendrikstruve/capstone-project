import React from 'react'
import ArrowButton from './ArrowButton'

export default {
  title: 'Arrow Button',
  component: ArrowButton,
}

export const up = (): JSX.Element => <ArrowButton direction="up" />
export const up = (): JSX.Element => <ArrowButton direction="Down" />

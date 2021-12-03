import React from 'react'
import Heading from './Heading'

export default {
  title: 'Heading',
  component: Heading,
}

export const welcome = (): JSX.Element => <Heading>welcome</Heading>
export const dashboard = (): JSX.Element => <Heading>dashboard</Heading>

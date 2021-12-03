import React from 'react'
import FretCounter from './FretCounter'

export default {
  title: 'FretCounter',
  component: FretCounter,
}

export const oneToFour = (): JSX.Element => (
  <FretCounter start={1} end={4}></FretCounter>
)
export const twoToFive = (): JSX.Element => (
  <FretCounter start={2} end={5}></FretCounter>
)
export const threeToSix = (): JSX.Element => (
  <FretCounter start={3} end={6}></FretCounter>
)

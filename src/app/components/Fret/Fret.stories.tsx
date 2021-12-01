import React from 'react'
import Fret from './Fret'

export default {
  title: 'Fret',
  component: Fret,
}

export const oneToFour = (): JSX.Element => <Fret start={1} end={4}></Fret>
export const twoToFive = (): JSX.Element => <Fret start={2} end={5}></Fret>
export const threeToSix = (): JSX.Element => <Fret start={3} end={6}></Fret>

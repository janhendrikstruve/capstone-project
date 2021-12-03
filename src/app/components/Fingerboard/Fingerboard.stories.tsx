import React from 'react'
import Fingerboard from './Fingerboard'

export default {
  title: 'Fingerboard',
  component: Fingerboard,
}

export const empty = (): JSX.Element => (
  <Fingerboard pressed={{ e2: 0, b: 0, g: 0, d: 0, a: 0, e: 0 }} offset={0} />
)
export const firstRowFilled = (): JSX.Element => (
  <Fingerboard pressed={{ e2: 1, b: 1, g: 1, d: 1, a: 1, e: 1 }} offset={0} />
)

import type { ReactNode } from 'react'
import React from 'react'
import classes from './Button.module.css'
import styled from 'styled-components'

type ButtonProps = {
  children: ReactNode
}
function Button({ children }: ButtonProps): JSX.Element {
  return <button className={classes.button}>{children}</button>
}

export default Button

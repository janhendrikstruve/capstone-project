import React from 'react'
import type { ReactNode } from 'react'

export default function Heading({
  children,
}: {
  children?: ReactNode
}): JSX.Element {
  return <h1>{children}</h1>
}

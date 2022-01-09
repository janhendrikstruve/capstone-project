export type fingerboardDataType = {
  e2: number
  b: number
  g: number
  d: number
  a: number
  e: number
}

export type savedChordType = {
  chord: fingerboardDataType
  name: string
  offset: number
  id: string
}

export type fetchedChordType = {
  chords: {
    chord: string
    modf: string
    e2: number
    b: number
    g: number
    d: number
    a: number
    e: number
  }[]
}

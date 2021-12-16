import { useState } from 'react'

export default function useStickyState<T>(
  initialValue: T,
  key: string
): [storedValue: T, setStoredValue: (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = (value: T) => {
    setStoredValue(value)
    localStorage.setItem(key, JSON.stringify(value))
  }
  return [storedValue, setValue]
}

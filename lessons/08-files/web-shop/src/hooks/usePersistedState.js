import { useCallback, useState } from 'react'

const getFromStorage = key => {
  const storageRaw = localStorage.getItem(key)

  return storageRaw === null ? null : JSON.parse(storageRaw)
}

const saveToStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))

function calculateInitialState(key, initialState) {
  const initialStored = getFromStorage(key)

  return initialStored === null ? initialState : initialStored
}

export function usePersistedState(key, initialState) {
  const [state, setState] = useState(calculateInitialState(key, initialState))

  const handleStateChange = useCallback(
    newValue => {
      saveToStorage(key, newValue)

      setState(newValue)
    },
    [key]
  )

  return [state, handleStateChange]
}

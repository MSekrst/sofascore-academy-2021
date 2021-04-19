import { useCallback, useState } from 'react'

export function useVisible(initialState = false) {
  const [visible, setVisible] = useState(initialState)

  const toggleVisible = useCallback(() => {
    setVisible(prev => !prev)
  }, [])

  return { visible, toggleVisible, setVisible }
}

import React, { useCallback } from 'react'
import './input.css'

export const Input = React.memo(({ onChange, ...rest }) => {
  const handleOnChange = useCallback(
    e => {
      onChange(e.currentTarget.value)
    },
    [onChange]
  )

  return <input className="input" onChange={handleOnChange} {...rest} />
})

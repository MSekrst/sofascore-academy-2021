import React, { useCallback } from 'react'

export const Input = React.memo(({ value, onChange, ...rest }) => {
  const handleChange = useCallback(
    e => {
      onChange(e.target.value)
    },
    [onChange]
  )

  return <input className="input" value={value} onChange={handleChange} {...rest} />
})

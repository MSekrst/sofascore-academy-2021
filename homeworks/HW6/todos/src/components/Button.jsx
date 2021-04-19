import React from 'react'

export const Button = React.memo(({ children, className, ...rest }) => {
  return (
    <button className={`button ${className || ''}`} {...rest}>
      {children}
    </button>
  )
})

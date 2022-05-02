import React from 'react'
import './button.css'

export const Button = React.memo(props => {
  return <button className="button" {...props} />
})

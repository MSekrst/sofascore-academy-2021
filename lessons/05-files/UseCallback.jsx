import React from 'react'

function BadText(props) {
  console.log('Rendering text')

  return <p onClick={props.onClick}>Click me</p>
}

// React.Memo is used to memoize function results outside functional components. Inside components use `useMemo` hook.
const Text = React.memo(BadText)

export function UseCallback() {
  const [number, setNumber] = React.useState(0)

  // What will happen if we remove useCallback
  const handleOnClick = React.useCallback(() => {
    const number = Math.round(Math.random() * 1000)

    console.log('CLICK', number)

    setNumber(number)
    // NOTE: useState handlers (e.g. setNumber) doesn't need to go into dependency array as they will never change
  }, [])

  return (
    <div>
      <p>Random number: {number}</p>
      <Text onClick={handleOnClick} />
    </div>
  )
}

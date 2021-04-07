import React from 'react'

export function UseState() {
  // create state variable count with setter, 0 is initial state (can be omitted to use `undefined`)
  const [counter, setCount] = React.useState(0)

  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={() => setCount(counter + 1)}>ADD ONE</button>
    </div>
  )
}

export class UseStateClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = { count: 0 }

    this.setCount = this.setCount.bind(this)
  }

  setCount(newCount) {
    this.setState({ count: newCount })
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => this.setCount(count + 1)}>ADD ONE</button>
      </div>
    )
  }
}

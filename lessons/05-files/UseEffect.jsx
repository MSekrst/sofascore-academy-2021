import React from 'react'

export function UseEffect() {
  const [date, setDate] = React.useState(new Date())
  const [delay, setDelay] = React.useState(1000)

  // effect will run every time dependency array changes
  React.useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())
    }, delay)

    // return cleanup function which clears interval
    return () => {
      clearInterval(interval)
    }
    // delay is only dependency in dependency array -> run effect when delay changes
  }, [delay])

  return (
    <div>
      <p>{date.toLocaleTimeString()}</p>
      <p>
        Refresh rate: {delay / 1000}s <button onClick={() => setDelay(delay + 1000)}>ADD 1s</button>
        <button onClick={() => setDelay(delay - 1000)}>REMOVE 1s</button>
      </p>
    </div>
  )
}

export class UseEffectClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = { date: new Date(), delay: 1000 }

    this.setDate = this.setDate.bind(this)
    this.setDelay = this.setDelay.bind(this)
    this.updateDate = this.updateDate.bind(this)
  }

  setDate() {
    this.setState({ date: new Date() })
  }

  setDelay(newDelay) {
    this.setState({ delay: newDelay })
  }

  updateDate() {
    console.log('UPDATE', this.state.delay / 1000)

    this.setDate()
  }

  componentDidMount() {
    this.interval = setInterval(this.updateDate, this.state.delay)
  }

  componentWillUnmount() {
    console.log('CLEAN INTERVAL', this.state.delay / 1000)

    clearInterval(this.interval)
  }

  componentDidUpdate() {
    clearInterval(this.interval)

    this.interval = setInterval(this.updateDate, this.state.delay)
  }

  render() {
    const { date, delay } = this.state

    return (
      <div>
        <p>{date.toLocaleTimeString()}</p>
        <p>
          Refresh rate: {delay / 1000}s <button onClick={() => this.setDelay(delay + 1000)}>ADD 1s</button>
          <button onClick={() => this.setDelay(delay - 1000)}>REMOVE 1s</button>
        </p>
      </div>
    )
  }
}

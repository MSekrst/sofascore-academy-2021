import React from 'react'

export function Refs() {
  // default state for useRef hook is null (when element is not mounted or doesn't exists)
  const formRef = React.useRef(null)

  // get height of ref element and log it
  const getHeight = React.useCallback(() => {
    console.log({ formRef })

    if (formRef.current) {
      const height = formRef.current.getBoundingClientRect().height

      console.log('Form element height =', height)
    }
  }, [formRef])

  // can we recalculate heigh when it changes 🤔
  React.useEffect(() => {
    getHeight()

    window.addEventListener('resize', getHeight)

    return () => {
      window.removeEventListener('resize', getHeight)
    }
  }, [getHeight])

  return (
    <div>
      <h3>Random text</h3>
      <div ref={formRef}>
        <Form />
      </div>
    </div>
  )
}

// Form with uncontrolled input
class Form extends React.Component {
  constructor(props) {
    super(props)

    // initialize ref and save it to this.inputRef
    this.inputRef = React.createRef(null)
  }

  handleSubmit = event => {
    event.preventDefault()

    console.log({ inputRef: this.inputRef })

    const refValue = this.inputRef.current && this.inputRef.current.value

    console.log('Input value =', refValue)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input style={{ width: 500, border: '1px solid' }} ref={this.inputRef} type="text" placeholder="Text" />
        <button style={{ width: 200, border: '1px solid' }}>Submit</button>
      </form>
    )
  }
}

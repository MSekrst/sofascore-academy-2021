import React, { useCallback, useContext, useState } from 'react'

import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Add } from '../components/icons/Add'
import { Check } from '../components/icons/Check'
import { Close } from '../components/icons/Close'
import { useVisible } from '../hooks/useVisible'
import { TodoContext } from '../context/TodoContext'

export const TodoAdd = React.memo(() => {
  const [todoText, setTodoText] = useState('')
  const { visible, toggleVisible, setVisible } = useVisible(false)
  const { addTodo } = useContext(TodoContext)

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()

      addTodo(todoText)

      setVisible(false)
      setTodoText('')
    },
    [addTodo, todoText, setVisible]
  )

  const handleCancel = useCallback(() => {
    setVisible(false)
    setTodoText('')
  }, [setVisible])

  return (
    <>
      {!visible && (
        <Button onClick={toggleVisible}>
          <Add style={{ marginRight: 8 }} /> Add todo
        </Button>
      )}

      {visible && (
        <form className="form" onSubmit={handleSubmit}>
          <Input value={todoText} onChange={setTodoText} type="text" placeholder="Enter task" />
          <Button className="icon" disabled={!todoText} type="submit">
            <Check />
          </Button>
          <Button className="icon" type="button" onClick={handleCancel}>
            <Close />
          </Button>
        </form>
      )}
    </>
  )
})

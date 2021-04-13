import { useCallback, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'

let id = 1

function getId() {
  return id++
}

export function TodoContainer() {
  const [todos, setTodos] = useState([])

  const addTodo = useCallback(text => {
    const todo = { text, completed: false, id: getId() }

    setTodos(previous => [...previous, todo])
  }, [])

  const removeTodo = useCallback(id => {
    setTodos(previous => previous.filter(t => t.id !== id))
  }, [])

  const setTodoStatus = useCallback((id, status) => {
    console.log('remove todo', id)

    setTodos(previous =>
      previous.map(t => {
        if (t.id === id) {
          t.completed = status
        }

        return t
      })
    )
  }, [])

  return (
    <TodoContext.Provider value={{ todos, removeTodo, addTodo, setTodoStatus }}>
      <div className="container">
        <div>
          <TodoAdd />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </TodoContext.Provider>
  )
}

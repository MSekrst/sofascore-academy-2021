import React, { useCallback, useContext, useMemo, useState } from 'react'
import { Button } from '../components/Button'
import { Close } from '../components/icons/Close'
import { Filter } from '../components/icons/Filter'
import { TodoContext } from '../context/TodoContext'
import { useVisible } from '../hooks/useVisible'

const Todo = React.memo(({ todo }) => {
  const { setTodoStatus, removeTodo } = useContext(TodoContext)

  const handleTodoClick = useCallback(() => {
    setTodoStatus(todo.id, !todo.completed)
  }, [todo, setTodoStatus])

  const handleTodoDelete = useCallback(
    e => {
      e.stopPropagation()

      removeTodo(todo.id)
    },
    [todo.id, removeTodo]
  )

  return (
    <div
      className="todo"
      onClick={handleTodoClick}
      style={{ textDecoration: todo.completed ? `line-through` : 'initial' }}
    >
      <p className="text">{todo.text}</p>
      <Button className="icon" onClick={handleTodoDelete}>
        <Close />
      </Button>
    </div>
  )
})

const FILTER_STATUS = {
  Default: 0,
  Completed: 1,
  NonCompleted: 2,
}

export function TodoList() {
  const { todos } = useContext(TodoContext)
  const { visible, toggleVisible } = useVisible(false)
  const [filter, setFilter] = useState(FILTER_STATUS.Default)

  const handleFilterChange = useCallback(e => {
    const filterValueClicked = Number(e.target.value)

    setFilter(filterValueClicked)
  }, [])

  const filteredTodos = useMemo(() => {
    return todos.filter(t => {
      switch (filter) {
        case FILTER_STATUS.Completed:
          return t.completed

        case FILTER_STATUS.NonCompleted:
          return !t.completed

        default:
          return t
      }
    })
  }, [todos, filter])

  if (!todos.length) {
    return null
  }

  return (
    <>
      <h2>TODO LIST</h2>
      <Button onClick={toggleVisible}>
        <Filter style={{ marginRight: 8 }} /> Show filters
      </Button>
      {visible && (
        <div className="filter-wrapper">
          <Button
            className={FILTER_STATUS.Default === filter ? 'active' : 'inactive'}
            onClick={handleFilterChange}
            value={FILTER_STATUS.Default}
          >
            All
          </Button>
          <Button
            className={FILTER_STATUS.Completed === filter ? 'active' : 'inactive'}
            onClick={handleFilterChange}
            value={FILTER_STATUS.Completed}
          >
            Completed
          </Button>
          <Button
            className={FILTER_STATUS.NonCompleted === filter ? 'active' : 'inactive'}
            onClick={handleFilterChange}
            value={FILTER_STATUS.NonCompleted}
          >
            Not completed
          </Button>
        </div>
      )}
      <div className="list-wrapper">
        {filteredTodos.length ? (
          filteredTodos.map(todo => <Todo key={todo.id} todo={todo} />)
        ) : (
          <div>No todos for selected filter</div>
        )}
      </div>
    </>
  )
}

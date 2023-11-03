import React, { useEffect, useState } from 'react'
import EditTodo from './EditTodo'

function ListTodos() {
  const [todo, setTodo] = useState([])

  const deleteFunction = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/v1/todo/${id}`, {
        method: 'DELETE',
      })
      setTodo(todo.filter((todo) => todo.todo_id !== id))
    } catch (error) {
      console.error(error.message)
    }
  }

  const getTodo = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/todo')
      setTodo(await response.json())
    } catch (error) {
      console.error('error', error)
    }
  }

  useEffect(() => {
    getTodo()
  }, [])

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((todo) => {
            return (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteFunction(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default ListTodos

import React, { useState } from 'react'

function InputTodo() {
  const [description, setDescription] = useState('')

  const submitForm = async (e) => {
    e.preventDefault()
    try {
      const body = { description }
      await fetch('http://localhost:5000/api/v1/todo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      window.location = '/'
    } catch (error) {
      console.error('error', error)
    }
  }
  return (
    <>
      <h1 className="text-center mt-5">pern Todo list</h1>
      <form className="d-flex mt-5" onSubmit={submitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  )
}

export default InputTodo

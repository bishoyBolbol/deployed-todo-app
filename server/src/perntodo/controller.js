const pool = require('../../db')
const queries = require('./queries')

const addTodo = (req, res) => {
  const { description } = req.body
  pool.query(queries.addTodo, [description], (error, results) => {
    if (error) throw error
    res.status(201).send('todo created successfully')
  })
}

const getTodo = (req, res) => {
  pool.query(queries.getTodo, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const getTodoById = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(queries.getTodoById, [id], (error, results) => {
    if (!results.rows.length) {
      res.send(`no id = ${id} found`)
    }

    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const updateTodo = (req, res) => {
  const todo_id = parseInt(req.params.id)
  const { description } = req.body
  pool.query(queries.getTodoById, [todo_id], (error, results) => {
    if (!results.rows.length) {
      res.send(`No ID:${todo_id} found`)
    }
    pool.query(queries.updateTodo, [description, todo_id], (error, results) => {
      if (error) throw error
      res.status(200).send('todo updated successfully')
    })
  })
}

const deleteTodo = (req, res) => {
  const todo_id = parseInt(req.params.id)
  pool.query(queries.getTodoById, [todo_id], (error, results) => {
    if (!results.rows.length) {
      res.send(`No ID:${todo_id} found`)
    }
    pool.query(queries.deleteTodo, [todo_id], (error, results) => {
      if (error) throw error
      res.status(200).send('todo deleted successfully')
    })
  })
}

module.exports = {
  addTodo,
  getTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
}

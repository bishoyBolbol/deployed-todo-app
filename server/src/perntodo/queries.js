const addTodo = 'INSERT INTO todo ( description ) VALUES ($1)'
const getTodo = 'SELECT * FROM todo'
const getTodoById = 'SELECT * FROM todo WHERE todo_id = $1'
const updateTodo = 'UPDATE todo SET description = $1 WHERE todo_id = $2'
const deleteTodo = 'DELETE FROM todo WHERE todo_id = $1'

module.exports = {
  addTodo,
  getTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
}

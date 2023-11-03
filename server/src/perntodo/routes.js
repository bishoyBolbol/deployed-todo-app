const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.post('/', controller.addTodo)
router.get('/', controller.getTodo)
router.get('/:id', controller.getTodoById)
router.put('/:id', controller.updateTodo)
router.delete('/:id', controller.deleteTodo)

module.exports = router

const express = require('express');
const router = express.Router();

const {createTodo, updateTodo, deleteTodo, getSingleTodo, getAllTasks} = require('../controllers/todoController');

router.route('/').post(createTodo);
router.route('/:id').put(updateTodo);
router.route('/:id').delete(deleteTodo);
router.route('/:id').get(getSingleTodo);
router.route('/').get(getAllTasks);

module.exports = router
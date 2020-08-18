/***************************************************************************
 *                              Todo routes                                *
 ***************************************************************************/

const express = require('express');
const router = express.Router();

const todoController = require('../Controllers/todo')

/**
 * add new todo
 * POST /api/todo
 */
router.post('/', todoController.addNewTodo);

/**
 * get todo list
 * GET /api/todo
 */
router.get('/', todoController.getTodoList);

/**
 * delete todo
 * DELETE /api/todo
 */
router.delete('/', todoController.deleteTodo);

/**
 * update todo
 * PUT /api/todo
 */
router.put('/', todoController.updateTodo);

module.exports = router;
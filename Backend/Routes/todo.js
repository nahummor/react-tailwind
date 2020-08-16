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

module.exports = router;
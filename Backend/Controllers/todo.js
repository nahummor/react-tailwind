/***************************************************************************
 *                              ToDo controller                            *
 ***************************************************************************/
const mongoDB = require('mongodb');
const ObjectID = mongoDB.ObjectID;
const db = require('../dbInit');


/**
 * test api to learn React query
 */
exports.addNewTodo = (req, res, next) => {
    const todo = req.body.todo;
    const userName = req.body.userName;

    const newTodo = {
        todo,
        userName
    };

    db.getDb()
        .collection('todo')
        .insertOne(newTodo)
        .then(result => {
            const ans = {
                todo: {
                    id: result.insertedId,
                    todo,
                    userName
                },
                insertedCount: result.insertedCount,
                n: result.result.n,
                ok: result.result.ok
            };

            res.status(200).json({
                ans: ans
            });
        })
        .catch(error => {
            console.error('Error occurred on add new ToDo: ', error);

            res.status(400).json({
                message: 'Error occurred on add new ToDo',
                error: error
            });
        })
};

exports.getTodoList = async (req, res, next) => {
    const todoList = [];

    await db.getDb()
        .collection('todo')
        .find()
        .forEach(todo => todoList.push(todo));

    return res.status(200).json({
        todoList
    });
};
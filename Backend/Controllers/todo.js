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
                todoId: result.insertedId,
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
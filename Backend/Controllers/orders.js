/***************************************************************************
 *                              orders controller                          *
 ***************************************************************************/
const mongoDB = require('mongodb');
const ObjectID = mongoDB.ObjectID;
const db = require('../dbInit');
const util = require('../Util/isDate');

/**
 * add new order
 */
exports.addNewOrder = (req, res, next) => {
    // console.log('New Order: ', req.body);
    const order = {
        ...req.body,
        schema: req.userData.schema
    };
    order.orderDate = new Date(req.body.orderDate)
    order.orderNumber = +req.body.orderNumber;
    order.sum = +req.body.sum;

    db.getDb()
        .collection('orders')
        .insertOne(order)
        .then(result => {

            const ans = {
                orderId: result.insertedId,
                insertedCount: result.insertedCount,
                n: result.result.n,
                ok: result.result.ok
            };

            res.status(200).json({
                ans: ans
            });
        })
        .catch(error => {
            console.error('Error occurred on add new Order: ', error);

            res.status(400).json({
                message: 'Error occurred on add new Order',
                error: error
            });
        });
}

/**
 * check if order number already exist
 */
exports.isOrderNumberExist = (req, res, next) => {
    const orderNumber = +req.params.orderNumber;

    db.getDb()
        .collection('orders')
        .findOne({
            orderNumber: orderNumber
        })
        .then(ans => {
            // if not find ans = null otherwise ans = order
            // console.log(ans);

            res.status(200).json({
                ans: ans
            });
        }).catch(error => {
            console.log('isOrderNumberExist: ', error);

            res.status(400).json({
                message: 'isOrderNumberExist error occurred',
                error: error
            });
        });
}

/**get orders by page for test with React query */
exports.getOrdersByPageV2 = async (req, res, next) => {
    const page = +req.query.page;
    const rowsPerPage = 10;
    const rowsToSkip = page * rowsPerPage;
    const orders = [];

    const totalOrdersNumber = await db.getDb()
        .collection('orders')
        .find()
        .count();

    await db.getDb()
        .collection('orders')
        .find()
        .sort({
            orderNumber: 1
        })
        .skip(rowsToSkip)
        .limit(rowsPerPage)
        .forEach(order => orders.push(order));

    res.status(200).json({
        orders: orders,
        count: totalOrdersNumber,
        next: page < Math.ceil(totalOrdersNumber / rowsPerPage) - 1 ? true : false,
        previous: page > 0 ? true : false
    });
}

/**
 * get orders by page and rowsPerPage
 */
exports.getOrdersByPage = async (req, res, next) => {
    const page = +req.params.page;
    const rowsPerPage = +req.params.rowsPerPage;
    const rowsToSkip = page * rowsPerPage;
    const sortBy = req.params.sortBy;
    const sortDirection = req.params.sortDirection === 'asc' ? 1 : -1;
    const searchText = req.query.searchText;
    const orders = [];

    const criteriaArray = [{
        accountManager: {
            $regex: searchText
        }
    }, {
        job: {
            $regex: searchText
        }
    }, {
        company: {
            $regex: searchText
        }
    }, {
        doneByConstructor: {
            $regex: searchText
        }
    }, {
        contractNumber: {
            $regex: searchText
        }
    }, {
        budgetItem: {
            $regex: searchText
        }
    }];

    if (!isNaN(searchText)) {
        // search text is number
        criteriaArray.push({
            sum: {
                $eq: +searchText
            }
        });
        criteriaArray.push({
            orderNumber: {
                $eq: +searchText
            }
        });
    }

    if (util.isDate(searchText)) {
        console.log('*** Its a DATE: ', searchText);
        const dateValues = searchText.split('/');
        dateValues[0] = dateValues[0].length > 1 ? dateValues[0] : `0${dateValues[0]}`;
        dateValues[1] = dateValues[1].length > 1 ? dateValues[1] : `0${dateValues[1]}`;

        const d = `${dateValues[2]}-${dateValues[1]}-${dateValues[0]}`;
        const startDate = new Date(new Date(d).setHours(0, 0, 0, 0));
        const endDate = util.addDays(startDate, 1);

        criteriaArray.push({
            orderDate: {
                // $eq: new Date(d)
                $gte: startDate,
                $lte: endDate
            }
        });
    }

    try {

        if (searchText !== undefined && searchText !== '') {
            const totalOrdersNumber = await db.getDb()
                .collection('orders')
                .find({
                    $or: criteriaArray
                })
                .count();

            await db.getDb()
                .collection('orders')
                .find({
                    $or: criteriaArray
                })
                .sort({
                    [sortBy]: sortDirection
                })
                .skip(rowsToSkip)
                .limit(rowsPerPage)
                .forEach(order => orders.push(order));

            res.status(200).json({
                orders: orders,
                totalOrdersNumber: totalOrdersNumber
            });
        } else {
            const totalOrdersNumber = await db.getDb()
                .collection('orders')
                .find()
                .count();

            await db.getDb()
                .collection('orders')
                .find()
                .sort({
                    [sortBy]: sortDirection
                })
                .skip(rowsToSkip)
                .limit(rowsPerPage)
                .forEach(order => orders.push(order));

            res.status(200).json({
                orders: orders,
                totalOrdersNumber: totalOrdersNumber
            });
        }
    } catch (error) {
        console.log('getOrdersByPage: ', error);

        res.status(400).json({
            message: 'getOrdersByPage error occurred',
            error: error
        });
    }
};

/**
 * update order
 */
exports.updateOrder = (req, res, next) => {
    const orderId = req.body.order._id;
    const order = {
        ...req.body.order
    };
    order.orderDate = new Date(req.body.order.orderDate)
    order.orderNumber = +req.body.order.orderNumber;
    order.sum = +req.body.order.sum;

    delete order._id;

    db.getDb()
        .collection('orders')
        .updateOne({
            _id: new ObjectID(orderId)
        }, {
            $set: {
                ...order
            }
        })
        .then(result => {
            res.status(200).json({
                result: result.result
            });
        })
        .catch(error => {
            res.status(400).json({
                message: 'update order error occurred',
                error: error
            });
        });
}

/**
 * delete order
 */
exports.deleteOrder = (req, res, next) => {
    const orderId = req.params.orderId;

    db.getDb()
        .collection('orders')
        .deleteOne({
            _id: new ObjectID(orderId)
        })
        .then(result => {
            return res.status(200).json({
                orderId: orderId,
                result: result.result
            });
        }).catch(error => {
            console.error('Error occurred on deleteOrder: ', error);

            res.status(400).json({
                message: 'deleteOrder error occurred',
                error: error
            });
        })
}
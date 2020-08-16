const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('./models/http-error');
const db = require('./dbInit');

const ordersRoutes = require('./Routes/orders');
const todoRoutes = require('./Routes/todo');

const app = express();

/**
 * Set access control
 */
app.use((req, res, next) => {
    // to allow access from any domain
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // allow access to methods
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, PUT, OPTIONS'
    );

    // allow set Content-Type, Authorization, Origin, X-Requested-With, Accept  in client side
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, Origin, X-Requested-With, Accept'
    );

    next();
});

// set JSON body parser
app.use(bodyParser.json());



/**
 * Express routes
 */
app.use('/api/orders', ordersRoutes);
app.use('/api/todo', todoRoutes);

// display error
// for unsupported route
app.use((req, res, next) => {
    throw new HttpError('Could not find this Route', 404);
});

/**
 * The default error handler
 */
app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error)
    }

    res.status(error.code || 500).json({
        message: error.message || 'An unknown error occurred'
    });
});


/**
 * DB initialization
 */
db.initDb((error, db) => {
    if (error) {
        console.log('⛔ MongoDB Connection Error: ', error);
    } else {
        console.log('*** Connect to Mongo DB 👍 ***');
    }
});

module.exports = app;
/***************************************************************************
 *                              orders routes                              *
 ***************************************************************************/

const express = require('express');
const router = express.Router();

const ordersController = require('../Controllers/orders')


/**
 * is order number Exist
 * GET /api/orders/isOrderNumberExist
 */
router.get('/isOrderNumberExist/:orderNumber', ordersController.isOrderNumberExist);

/**
 * get orders by page and rowsPerPage
 * param 1 page
 * param 2 rowsPerPage
 * param 3 sortBy
 * param 4 sortDirection
 * param 5 searchText by query param
 * GET /api/orders/perPage
 */
router.get('/perPage/:page/:rowsPerPage/:sortBy/:sortDirection', ordersController.getOrdersByPage);

/**
 * get orders by page for React query test
 * GET /api/orders/
 */
router.get('/', ordersController.getOrdersByPageV2);

module.exports = router;
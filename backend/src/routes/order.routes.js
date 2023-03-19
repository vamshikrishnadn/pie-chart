const express = require('express');
const { createOrder, getAllOrders } = require('../controllers/order.controllers');

const router = express.Router();

router.post('/create', createOrder);
router.get('/getall', getAllOrders);

module.exports = router;

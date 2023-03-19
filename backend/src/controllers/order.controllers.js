const Orders = require('../models/orders.model.js');
const { getOrdersCount } = require('../services/order.services.js');
const catchAsyncErrors = require('../utils/catchAsyncErrors.js');

exports.createOrder = catchAsyncErrors(async (req, res) => {
  const ordersData = await new Orders(req.body);
  ordersData.save();
  const response = await getOrdersCount();
  res.status(200).send({
    message: 'success',
    payload: response,
  });
});

exports.getAllOrders = catchAsyncErrors(async (req, res) => {
  const response = await getOrdersCount();
  res.status(200).send({
    message: 'Success',
    payload: response,
  });
});

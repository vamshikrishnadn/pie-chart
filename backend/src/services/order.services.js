const Orders = require('../models/orders.model.js');

exports.getOrdersCount = async (req, res) => {
  const totalCount = [
    ['Delivery', 'Product Delivery'],
    ['Pending', await Orders.find({ status: 'Pending' }).count()],
    ['Conformed', await Orders.find({ status: 'Conformed' }).count()],
    ['Dispatched', await Orders.find({ status: 'Dispatched' }).count()],
    ['Complete', await Orders.find({ status: 'Complete' }).count()],
    ['Canceled', await Orders.find({ status: 'Canceled' }).count()],
  ];

  return totalCount;
};

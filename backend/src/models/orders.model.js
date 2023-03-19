const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = Schema({
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'Conformed', 'Dispatched', 'Complete', 'Canceled'],
  },
});

const Orders = mongoose.model('orders', orderSchema);

module.exports = Orders;

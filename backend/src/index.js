const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const orderRoutes = require('./routes/order.routes.js');

dotenv.config({ path: './.env' });
const app = express();

// Middleware section
app.use(cors());
app.use(morgan('combined'));

app.use(
  bodyParser.json({
    limit: '4mb',
    extended: true,
  })
);
app.use(bodyParser.urlencoded({ limit: '4mb', extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/pie-chart').then(() => {
  console.log('connected to database successfully');
});

app.get('/', (req, res) => {
  res.send('<h1>Hello there</h1>');
});

app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Successfully started on port ${PORT}`);
});

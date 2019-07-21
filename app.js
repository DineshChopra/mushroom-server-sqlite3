const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static(__dirname + '/view'));

const productRoute = require('./routes/product/product.route');
const purchaseRoute = require('./routes/purchase/purchase.route');
const stockRoute = require('./routes/stock/stock.route');
const saleRoute = require('./routes/sale/sale.route');
const customerRoute = require('./routes/customer/customer.route');
const testRoute = require('./routes/test/test.route');
const path = require('path');

app.use(bodyParser.json());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//     // if(req.method === 'OPTIONS') {
//     //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//     //   res.status(200).json({});
//     // }
//     next();
// });

app.use('/api/product/', productRoute);
app.use('/api/customer/', customerRoute);
app.use('/api/purchase/', purchaseRoute);
app.use('/api/stock/', stockRoute);
app.use('/api/sale/', saleRoute);
app.use('/api/test/', testRoute);

app.get('/', function (req, res) {
  // res.send('<html><body><h1>Hello World</h1></body></html>');
  res.sendFile(path.join(__dirname+'/view/index.html'));
});

// app.use('/', router);

module.exports = app;
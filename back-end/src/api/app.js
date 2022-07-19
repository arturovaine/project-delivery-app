const express = require('express');
const cors = require('cors');
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoutes');
const customerRoutes = require('./routes/customerRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const productRoutes = require('./routes/productRoutes');
const salesRoutes = require('./routes/salesRoutes');
const ordersRoutes = require('./routes/ordersRoutes');

const app = express();
app.use(cors());
app.use(express.json());
// https://www.positronx.io/how-to-serve-static-files-css-js-images-in-express-js/
app.use(express.static('public'));

app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/customer', customerRoutes);
app.use('/sellers', sellerRoutes);
app.use('/products', productRoutes);
app.use('/sales', salesRoutes);
app.use('/orders', ordersRoutes);
app.use('/admin/manage', adminRoutes);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;

const express = require('express');

const app = express();

// MIDDLEWARES

app.use(express.json());

// ROUTES
const listRouter = require('./routes/listRoutes');
app.use('/', listRouter);

app.all('*', (req, res, next) => {
    next(new Error(`Invalid Address: ${req.originalUrl}`));
});

module.exports = app;
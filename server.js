const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

// mongoDB database connection
const mongoose = require('mongoose');

// const database = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);
const database = process.env.LOCAL_DB;
mongoose.connect(database)
    .then(connection => {
    // console.log(connection.connections);
    console.log('Database connected! ...');
});
///////

// RUN THE SERVER
const app = express();
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`App is running at ${port}`);
});

// UNHANDLED REJECTION // event listener for server connection problems
process.on('unhandledRejection', err => {
    console.log('Unhandled Rejection, Shutting Server Down ...');
    console.log(err.name, err.message);

    server.close(() => {
        process.exit(1); // 0 is success, 1 is error
    });
});

// UNHANDLED EXCEPTION // event listener for synchonous functions and code errors
process.on('uncaughtException', err => {
    console.log(`Uncaught Exception, Shutting Server Down ...`);
    console.log(err.name, err.message, err);

    process.exit(1);
});

// MIDDLEWARES
app.use(express.json());

// ROUTES
const listRouter = require('./routes/listRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const shopRouter = require('./routes/shopRoutes');
const itemRouter = require('./routes/itemRoutes');

app.use('/items', itemRouter);
app.use('/shops', shopRouter);
app.use('/categories', categoryRouter);
app.use('/', listRouter);


app.all('*', (req, res, next) => {
    next(new Error(`Invalid Address: ${req.originalUrl}`));
});
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const errorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

// mongoDB database connection
const mongoose = require('mongoose');

// const database = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD); //atlas
// const database = process.env.LOCAL_DB;                                             //local DB
const database = process.env.DOCKER_DATABASE;                                         //dockerized local DB
mongoose.connect(database)
    .then(connection => {
    // console.log(connection.connections);
    console.log('Database connected! ...');
});
///////

// RUN THE SERVER
const app = express();
const port = process.env.PORT;
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
    // const err = new Error(`Invalid Address: ${req.originalUrl}`);
    // err.status = 'fail';
    // err.statusCode = 404;
    
    next(new AppError(`Invalid Address: ${req.originalUrl}`, 404));
});

// error middleware
app.use(errorHandler);
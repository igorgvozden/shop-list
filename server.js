const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

// povezi sa mongoDB
const mongoose = require('mongoose');

const database = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);
mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(connection => {
    // console.log(connection.connections);
    console.log('Database connected! ...');
});
///////

// POKRENI SERVER
const app = require('./app');
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`App is running at ${port}`);
});

// UNHANDLED REJECTION NA SERVERU // event listener za greske na konekciji sa serverom
process.on('unhandledRejection', err => {
    console.log('Unhandled Rejection, Shutting Server Down ...');
    console.log(err.name, err.message);

    server.close(() => {
        process.exit(1); // 0 je success, 1 je za error
    });
});

// UNHANDLED EXCEPTION NA SERVERU // event listener za greske u kodu
process.on('uncaughtException', err => {
    console.log('Uncaught Exception(code err), Shutting Server Down ...');
    console.log(err.name, err.message);

    process.exit(1); // 0 je success, 1 je za error
});
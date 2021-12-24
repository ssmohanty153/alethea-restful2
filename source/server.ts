

import express from 'express';

import logging from './config/logging'

import config from './config/config';

import bodyParser from 'body-parser';

import http from 'http';
// import bookRoutes from './routes/book';

const name = 'Server';
const router = express();

router.use((req, res, next) => {
    logging.info(name, `METHOD-[${req.method}],URL-[${req.url}],
    IP-[${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(name, `METHOD-[${req.method}],URL-[${req.url}],
        IP-[${req.socket.remoteAddress}],STATUS-[${req.statusCode}]`);

    });

    next();

});


router.use(bodyParser.urlencoded({ extended: false }));

router.use(bodyParser.json);

router.use((req, res, next) => {
    res.header('acces-origin', '*');
    res.header('access-header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');


    if (req.method == 'OPTION') {
        res.header('Access-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();

});

// router.use('/books', bookRoutes);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => logging.info(name, `Server is running ${config.server.hostname}:${config.server.port}`));
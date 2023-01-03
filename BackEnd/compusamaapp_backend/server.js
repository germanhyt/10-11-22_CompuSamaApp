const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const multer = require('multer');
const serviceAccount = require('./serviceAccountKey.json');
const admin = require('firebase-admin');
const io = require('socket.io')(server)
const ordersDeliverySocket = require('./sockets/orders_delivery_socket')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const upload = multer({
    storage: multer.memoryStorage()
});


var expressSession = require("express-session");

app.use(expressSession({
    secret: "This is one hell of a secret",
    resave: false,
    saveUninitialized: false
}));

/*
*RUTAS
*/

const users = require('./routes/usersRoutes');
const categories = require('./routes/categoriesRoutes');
const products = require('./routes/productsRoutes');
const address = require('./routes/addressRoutes');
const orders = require('./routes/ordersRoutes');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.disable('x-powered-by');

app.set('port', port);

/*
* LLAMANDO A LA RUTAS
*/

users(app, upload);
categories(app, upload);
address(app);
orders(app);
products(app, upload);

/*
LLAMAR A LOS SOCKETS
*/

ordersDeliverySocket(io)

server.listen(3000,'172.20.25.157' || 'localhost', function() {// la ip depende de la pc
    console.log('Aplicacion NodeJs ' + process.pid + ' Iniciada...')
});

app.get('/', (req,res) => {
    res.send('Ruta raiz backend');

});

app.get('/test', (req,res) => {
    res.send('Esta es la ruta TEST');

});

// ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);

});

module.exports = {
    app: app,
    server: server,
}

// 200 - ES UNA RESPUESTA EXITOSA
// 404 - SIGNIFICA QUE LA URL NO EXISTE
// 500 - ERROR INTERNO DEL SERVIDOR
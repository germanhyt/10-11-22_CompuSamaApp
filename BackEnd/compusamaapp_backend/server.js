const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

/*
*RUTAS
*/

const users = require('./routes/usersRoutes');


const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

/*
* LLAMANDO A LA RUTAS
*/

users(app);

server.listen(3000,'192.168.18.4' || 'localhost', function() {// la ip depende de la pc
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
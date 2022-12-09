const OrdersController = require('../controllers/ordersController');
const passport = require('passport');

module.exports = (app, upload) => {

    //TRAER DATOS
    app.get('/api/orders/findByStatus/:status', passport.authenticate('jwt', {session: false}), OrdersController.findByStatus);
    app.get('/api/orders/findByClientAndStatus/:id_client/:status', passport.authenticate('jwt', {session: false}), OrdersController.findByClientAndStatus);

    //GUARDAR DATOSw
    app.post('/api/orders/create', passport.authenticate('jwt', {session: false}), OrdersController.create);

    //ACTUALIZAR DATOS
    // 401 NO AUTORIZADA

}
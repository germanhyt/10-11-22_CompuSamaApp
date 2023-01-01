const AddressController = require('../controllers/addressController');
const passport = require('passport');

module.exports = (app, upload) => {

    //TRAER DATOS
    app.get('/api/address/findByUser/:id_user', passport.authenticate('jwt', {session: false}), AddressController.findByUser);

    //GUARDAR DATOSw
    app.post('/api/address/create', passport.authenticate('jwt', {session: false}), AddressController.create);

    //ACTUALIZAR DATOS
    // 401 NO AUTORIZADA

}
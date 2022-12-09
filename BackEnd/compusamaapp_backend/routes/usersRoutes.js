const UsersController = require('../controllers/usersController');
const passport = require('passport');

module.exports = (app, upload) => {

    //TRAER DATOS
    app.get('/api/users/getAll', UsersController.getAll);
    app.get('/api/users/findDeliveryMen', passport.authenticate('jwt', {session: false}), UsersController.findDeliveryMen);

    //GUARDAR DATOSw
    app.post('/api/users/create',UsersController.register);
    app.post('/api/users/login',UsersController.login);
    //app.post('/api/users/logout',UsersController.logout);

    //ACTUALIZAR DATOS
    // 401 NO AUTORIZADA

    app.put('/api/users/update', passport.authenticate('jwt', {session: false}), upload.array('image', 1), UsersController.update);
    app.put('/api/users/updateWithoutImage', passport.authenticate('jwt', {session: false}), UsersController.updateWithoutImage);

}
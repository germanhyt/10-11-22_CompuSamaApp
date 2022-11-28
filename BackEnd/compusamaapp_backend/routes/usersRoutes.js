const UsersController = require('../controllers/usersController');

module.exports = (app) => {

    //TRAER DATOS
    app.get('/api/users/getAll', UsersController.getAll);

    //GUARDAR DATOSw
    app.post('/api/users/create',UsersController.register);
    app.post('/api/users/login',UsersController.login);

}
const UsersController = require('../controllers/usersController');

module.exports = (app, upload) => {

    //TRAER DATOS
    app.get('/api/users/getAll', UsersController.getAll);

    //GUARDAR DATOSw
    app.post('/api/users/create',UsersController.register);
    app.post('/api/users/login',UsersController.login);

    //ACTUALIZAR DATOS

    app.put('/api/users/update', upload.array('image', 1), UsersController.update);

}
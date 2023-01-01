const CategoriesController = require('../controllers/categoriesController');
const passport = require('passport');

module.exports = (app, upload) => {

    //TRAER DATOS
    app.get('/api/categories/getAll', passport.authenticate('jwt', {session: false}), CategoriesController.getAll);

    //GUARDAR DATOSw
    app.post('/api/categories/create', passport.authenticate('jwt', {session: false}), upload.array('image',1), CategoriesController.create);

    //ACTUALIZAR DATOS
    // 401 NO AUTORIZADA

}
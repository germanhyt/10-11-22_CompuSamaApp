const ProductsController = require('../controllers/productsController');
const passport = require('passport');

module.exports  = (app, upload) => {

    app.get('/api/products/getAll', ProductsController.getAll);
    
    app.get('/api/products/findByCategory/:id_category', passport.authenticate('jwt', {session: false}),ProductsController.findByCategory);

    app.post('/api/products/create', passport.authenticate('jwt', {session: false}), upload.array('image', 3),ProductsController.create);

}


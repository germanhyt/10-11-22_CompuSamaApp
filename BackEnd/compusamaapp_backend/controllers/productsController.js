const Product = require('../models/product');
const storage = require('../utils/cloud_storage');
const asyncForEach = require('../utils/async_foreach');

module.exports = {

    async create(req, res, next) {
        const product = JSON.parse(req.body.product);

        const files = req.files;

        let inserts = 0;

        if(files.length === 0){
            return res.status(501).json({
                message: 'Error al registrar el producto no tiene imagen',
                success: false
            });
        }
        else {
            try {

                const data = await Product.create(product); //ALMACENANDO INFO
                product.id = data.id;

                const start = async () => {
                    await asyncForEach(files, async (file) => {
                        const pathImage = `image_${Date.now()}`;
                        const url = await storage(file, pathImage);

                        if(url !== undefined && url !== null){
                            if(inserts == 0){ //IMAGEN1
                                product.image1 = url;
                            }
                            else if(inserts == 1) { //IMAGEN2
                                product.image2 = url;
                            }
                            else if(inserts == 2) { //IMAGEN3
                                product.image3 = url;
                            }
                        }

                        await Product.update(product);
                        inserts = inserts + 1;

                        if(inserts == files.length){
                            return res.status(201).json({
                                success: true,
                                message: 'El producto se ha registrado correctamente',
                            });
                        }
                    })
                }

                start();


            }
            catch(error){
                console.log(`Error : ${error}`);
                return res.status(501).json({
                    message: `Error al registrar el producto ${error}`,
                    success: false,
                    error: error
                });
            }
        }
    }
}
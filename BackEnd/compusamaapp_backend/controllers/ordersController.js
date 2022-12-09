const Order = require('../models/order');
const OrderHasProduct = require('../models/order_has_product');
const timeRelative = require('../utils/time_relative');

module.exports = {

    async findByStatus(req, res, next) {
        try {

            const status = req.params.status;
            let data = await Order.findByStatus(status);

            data.forEach(d => {
                d.timestamp = timeRelative(new Date().getTime(), d.timestamp);
            })

            console.log('Order: ', data)
            return res.status(201).json(data);

        }
        catch(error){
            console.log(`Error ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Hubo un error creando las ordenes por estado',
                error: error
            });
        }
    },


    async findByClientAndStatus(req, res, next) {
        try {

            const status = req.params.status;
            const id_client = req.params.id_client;
            let data = await Order.findByClientAndStatus(id_client, status);

            data.forEach(d => {
                d.timestamp = timeRelative(new Date().getTime(), d.timestamp);
            })

            console.log('Order: ', data)

            return res.status(201).json(data);

        }
        catch(error){
            console.log(`Error ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Hubo un error creando las ordenes por estado',
                error: error
            });
        }
    },

    async create(req, res, next) {
        try {

            const order = req.body;
            order.status = 'PAGADO'
            const data = await Order.create(order);


            // RECORRER TODOS LOS PRODUCTOS AGREGADOS A LA ORDEN
            for(const product of order.products) {
                await OrderHasProduct.create(data.id, product.id, product.quantity);
            }

            return res.status(201).json({
                success: true,
                message: 'La orden se creo correctamente',
                data :  data.id
            });

        }
        catch(error){
            console.log(`Error ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Hubo un error creando la orden',
                error: error
            });
        }
    }

}
module.exports = (io) => {

    const namespace = io.of('/orders/delivery');
    namespace.on('connection', function(socket) {

        console.log('USUARIO SE CONECTO A SOCKET IO');

        socket.on('position', function(data) {
            console.log('SE EMITIO', JSON.parse(data));

            const d = JSON.parse(data); // DEBE ENVIARLA EL CLIENTE (ID, LAT, LNG) double
            namespace.emit(`position/${d.id_order}`, { id_order: d.id_order, lat: d.lat, lng: d.lng }); // EMITE A KOTLIN

        })

        socket.on('disconnect', function(data) {
            console.log('USUARIO SE DESCONECTO DE SOCKET IO');
        })

    })

}
const db = require('../config/config');

const Address = {};


Address.findByUser = (id_user) => {

    const sql = `
    SELECT
        id,
        id_user,
        address,
        neighborhood,
        lat,
        lng
    FROM
        address
    WHERE
        id_user = $1
    `;

    return db.manyOrNone(sql, id_user);
}

Address.create = (address) =>{
    const sql = `
    INSERT INTO
        address(
            id_user,
            address,
            neighborhood,
            lat,
            lng,
            created_at,
            updated_at
        )
    VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id
    `;

    return db.oneOrNone(sql, [
        address.id_user,
        address.address,
        address.neighborhood,
        address.lat,
        address.lng,
        new Date(),
        new Date()
    ]);
}

module.exports = Address;
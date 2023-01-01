const db = require('../config/config');


const Rol = {};

Rol.getAll = () => {
    const sql = `
    SELECT
        *
    FROM
        users
    `;

    return db.manyOrNone(sql);
}

Rol.findByEmail = (email) => {
    const sql = `
    SELECT
        id
        email,
        name,
        lastname,
        image,
        phone,
        password,
        session_token
    FROM
        users
    WHERE
        email = $1
    `;

    return db.oneOrNone(sql, email);
}


Rol.findById = (id, callback) => {
    const sql = `
    SELECT
        id
        email,
        name,
        lastname,
        image,
        phone,
        password,
        session_token
    FROM
        users
    WHERE
        id = $1
    `;

    return db.oneOrNone(sql, id).then(user => { callback(null, user)})
}



Rol.create = (id_user, id_rol) => {

    const sql = `
    INSERT INTO
        user_has_roles(
            id_user,
            id_rol,
            created_at,
            updated_at
        )
    VALUES($1, $2, $3, $4)
    `;

    return db.none(sql, [
        id_user,
        id_rol,
        new Date(),
        new Date()
    ]);
}


module.exports = Rol;
const db = require('../config/config');


const User = {};

User.getAll = () => {
    const sql = `
    SELECT
        *
    FROM
        users
    `;

    return db.manyOrNone(sql);
}

User.create = (user) => {
    const sql = `
    INSERT INTO
        users(
            email,
            name,
            lastname,
            phone,
            image,
            password,
            created_at,
            updated_at
        )
    VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id
    `;

    return db.oneOrNone(sql, [
        user.email,
        user.name,
        user.lastname,
        user.phone,
        user.image,
        user.password,
        new Date(),
        new Date()

    ])
}


module.exports = User;
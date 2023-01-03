const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114,function(stringValue){
    return stringValue;
});

const databaseConfig = {
    'host' : '127.0.0.1',
    'port' : 5432,
    'database' : 'postgres',
    'user': 'postgres',
    'password': 'admin'
}


/*const databaseConfig = {
    'host' : 'db-service-compusama-prod-001.postgres.database.azure.com',
    'port' : 5432,
    'database' : 'db-service-compusama-prod-001',
    'user': 'compusama',
    'password': 'Vufu0451',
    'ssl':true
}*/

const db = pgp(databaseConfig);

module.exports = db;
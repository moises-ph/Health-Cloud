const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'registro_BD2',
    port: 3306
});

const format = mysql.format;

module.exports = {db, format};
const mysql = require('mysql');
const config = require('config');

const db = mysql.createConnection({
    host: config.get('db.host'),
    user: config.get('db.user'),
    password: config.get('db.password'),
    database: config.get('db.name'),
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    }
    console.log('Connected to the database');
});

module.exports = db;

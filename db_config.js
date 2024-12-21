const mysql = require('mysql');

// Create a MySQL connection pool
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'raju',
    database: 'test_db'
});

// Export the connection object
module.exports = connection;

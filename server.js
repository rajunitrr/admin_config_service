const express = require('express');
const connection = require('./db_config');  // Import the MySQL connection from db.js

const app = express();

// First, try connecting to the MySQL database before starting the server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');

    // If the connection is successful, start the server
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});

// Route to display a simple message
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Route to display data from the 'users' table
app.get('/v1/platform/configs', (req, res) => {
    connection.query('SELECT * FROM t_platform_config', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error fetching data from the database');
            return;
        }

        console.log(results);
        res.send('Platform configs ' + JSON.stringify(results));
    });
});

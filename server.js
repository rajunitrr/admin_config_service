const express = require('express');
const connection = require('./db/db_config');  // Import the MySQL connection from db.js
const configRoutes = require('./routes/platform_config_apis');
const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use('/v1/platform', configRoutes);


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

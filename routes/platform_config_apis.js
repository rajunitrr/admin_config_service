// routes/configRoutes.js
const express = require('express');
const router = express.Router();
const connection = require('../db/db_config');

// POST route for inserting data
router.post('/configs', (req, res) => {
    const configs = req.body.configs; // Expecting an array of config objects

    if (!Array.isArray(configs) || configs.length === 0) {
        return res.status(400).send('Invalid input data. Expecting an array of config objects.');
    }

    const query = 'INSERT INTO t_platform_config (f_app_id, f_key, f_value, f_time) VALUES ?';
    const values = configs.map(config => [
        config.f_app_id,
        config.f_key,
        config.f_value,
        config.f_time
    ]);

    connection.query(query, [values], (err, result) => {
        if (err) {
            console.error('Error executing insert query:', err);
            return res.status(500).send('Error inserting data into the database');
        }

        console.log('Inserted rows:', result.affectedRows);
        res.status(201).send('Data successfully inserted');
    });
});

// PUT route for updating data
router.put('/configs/:id', (req, res) => {
    const { id } = req.params;
    const { f_key, f_value, f_time } = req.body;

    if (!f_key || !f_value || !f_time) {
        return res.status(400).send('Invalid input data. Missing required fields.');
    }

    const query = 'UPDATE t_platform_config SET f_key = ?, f_value = ?, f_time = ? WHERE f_app_id = ?';
    const values = [f_key, f_value, f_time, id];

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error('Error executing update query:', err);
            return res.status(500).send('Error updating data in the database');
        }

        if (result.affectedRows === 0) {
            return res.status(404).send('No record found to update');
        }

        console.log('Updated rows:', result.affectedRows);
        res.status(200).send('Data successfully updated');
    });
});

// DELETE route for deleting data
router.delete('/configs/:id', (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM t_platform_config WHERE f_app_id = ?';
    connection.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error executing delete query:', err);
            return res.status(500).send('Error deleting data from the database');
        }

        if (result.affectedRows === 0) {
            return res.status(404).send('No record found to delete');
        }

        console.log('Deleted rows:', result.affectedRows);
        res.status(200).send('Data successfully deleted');
    });
});


router.get('/configs', (req, res) => {
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

module.exports = router;

// GET route for fetching a specific config by id
router.get('/configs/:id', (req, res) => {
    const { id } = req.params;

    const query = 'SELECT * FROM t_platform_config WHERE f_app_id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send('Error fetching data from the database');
        }

        if (results.length === 0) {
            return res.status(404).send('No record found');
        }

        console.log(results);
        res.send('Platform config ' + JSON.stringify(results));
    });
});
const db = require('../utils/dbConnection');

exports.getAllConfigs = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM t_platform_config';
        db.query(query, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

exports.createConfig = (data) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO t_platform_config SET ?';
        db.query(query, data, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};


exports.updateConfig = (f_key, f_value) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE t_platform_config SET f_value = ?,f_time = NOW() WHERE f_key = ?';
        db.query(query, [f_value, f_key], (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

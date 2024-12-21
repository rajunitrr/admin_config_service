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

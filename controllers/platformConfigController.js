const platformConfigModel = require('../models/platformConfigModel');

exports.getAllConfigs = async (req, res) => {
    try {
        const configs = await platformConfigModel.getAllConfigs();
        res.status(200).json(configs);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch configs' });
    }
};

exports.createConfig = async (req, res) => {
    try {
        const result = await platformConfigModel.createConfig(req.body);
        res.status(201).json({ message: 'Config created', result });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create config' });
    }
};

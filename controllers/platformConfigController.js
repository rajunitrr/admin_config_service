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


// Controller method to update the config based on f_key
exports.updateConfig = async (req, res) => {
    const { f_key, f_value } = req.body;

    if (!f_key || !f_value) {
        return res.status(400).json({ message: 'f_key and f_value are required' });
    }

    try {
        const result = await platformConfigModel.updateConfig(f_key, f_value);
        if (result.affectedRows > 0) {
            return res.status(200).json({ message: 'Config updated successfully' });
        } else {
            return res.status(404).json({ message: 'Config not found for the given f_key' });
        }
    } catch (err) {
        console.error('Error updating config:', err);
        return res.status(500).json({ message: 'Server error, please try again later' });
    }
};


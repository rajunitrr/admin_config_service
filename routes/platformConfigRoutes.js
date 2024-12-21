const express = require('express');
const router = express.Router();
const platformConfigController = require('../controllers/platformConfigController');

router.get('/', platformConfigController.getAllConfigs);
router.post('/', platformConfigController.createConfig);
router.put('/', platformConfigController.updateConfig);


module.exports = router;

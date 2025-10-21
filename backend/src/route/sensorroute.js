const router = require('express').Router();
const sensorController = require('../controllers/sensorController');

router.get('/sensors/current', sensorController.getCurrent);
router.post('/sensors', sensorController.record);

module.exports = router;

const express = require('express');
const router = express.Router();

const thetichController = require('../app/controllers/TheTichController');

router.get('/', thetichController.getTheTich);

module.exports = router;

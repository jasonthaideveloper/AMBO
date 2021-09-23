const express = require('express');
const router = express.Router();

const tongquanController = require('../app/controllers/TongQuanController');

router.get('/', tongquanController.getTongQuan);

module.exports = router;

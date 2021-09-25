const express = require('express');
const router = express.Router();

const quanhuyenController = require('../app/controllers/QuanHuyenController');

router.post('/', quanhuyenController.postQuanHuyen);

router.get('/', quanhuyenController.getQuanHuyen);

module.exports = router;

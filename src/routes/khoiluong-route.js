const express = require('express');
const router = express.Router();

const khoiluongController = require('../app/controllers/KhoiLuongController');

router.get('/', khoiluongController.getKhoiLuong);

module.exports = router;

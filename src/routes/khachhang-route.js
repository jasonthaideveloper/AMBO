const express = require('express');
const router = express.Router();

const khachhangController = require('../app/controllers/KhachHangController');

router.get('/', khachhangController.getKhachHang);

module.exports = router;

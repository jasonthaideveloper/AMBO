const express = require('express');
const router = express.Router();

const donhangController = require('../app/controllers/DonHangController');

router.get('/', donhangController.getDonHang);

module.exports = router;

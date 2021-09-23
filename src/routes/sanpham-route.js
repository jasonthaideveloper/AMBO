const express = require('express');
const router = express.Router();

const sanphamController = require('../app/controllers/SanPhamController');

router.get('/', sanphamController.getSanPham);

module.exports = router;

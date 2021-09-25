const express = require('express');
const router = express.Router();

const loaisanphamController = require('../app/controllers/LoaiSanPhamController');

router.get('/', loaisanphamController.getLoaiSanPham);

module.exports = router;

const express = require('express');
const router = express.Router();

const hinhthucthanhtoanController = require('../app/controllers/HinhThucThanhToanController');

router.get('/', hinhthucthanhtoanController.getHinhThucThanhToan);

module.exports = router;

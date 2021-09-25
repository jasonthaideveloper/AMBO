const express = require('express');
const router = express.Router();

const hinhthucvanchuyenController = require('../app/controllers/HinhThucVanChuyenController');

router.get('/', hinhthucvanchuyenController.getHinhThucVanChuyen);

module.exports = router;

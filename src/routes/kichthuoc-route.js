const express = require('express');
const router = express.Router();

const kichthuocController = require('../app/controllers/KichThuocController');

router.get('/', kichthuocController.getKichThuoc);

module.exports = router;

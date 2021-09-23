const express = require('express');
const router = express.Router();

const nhacungcapController = require('../app/controllers/NhaCungCapController');

router.get('/', nhacungcapController.getNhaCungCap);

module.exports = router;

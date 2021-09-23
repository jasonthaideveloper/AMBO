const express = require('express');
const router = express.Router();

const thuoctinhchungController = require('../app/controllers/ThuocTinhChungController');

router.get('/', thuoctinhchungController.getThuocTinhChung);

module.exports = router;

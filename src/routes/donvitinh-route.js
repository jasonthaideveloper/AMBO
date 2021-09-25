const express = require('express');
const router = express.Router();

const donvitinhController = require('../app/controllers/DonViTinhController');

router.get('/', donvitinhController.getDonViTinh);

module.exports = router;

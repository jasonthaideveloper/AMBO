const express = require('express');
const router = express.Router();

const tinhthanhphoController = require('../app/controllers/TinhThanhPhoController');

router.post('/', tinhthanhphoController.postTinhThanhPho);

router.put('/:id', tinhthanhphoController.updateTinhThanhPho);

router.get('/:id/edit', tinhthanhphoController.getId);

router.get('/', tinhthanhphoController.getTinhThanhPho);

module.exports = router;

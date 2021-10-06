const express = require('express');
const router = express.Router();

const tinhthanhphoController = require('../app/controllers/TinhThanhPhoController');

router.post('/', tinhthanhphoController.postTinhThanhPho);

router.put('/:id', tinhthanhphoController.updateTinhThanhPho);

router.put('/:id/district', tinhthanhphoController.updateQuanHuyenToThanhPho);

// router.delete('/:id/district', tinhthanhphoController.destroyQuanHuyenToThanhPho);

router.patch('/:id/restore', tinhthanhphoController.restoreTinhThanhPho);

router.delete('/:id/storage', tinhthanhphoController.deleteTinhThanhPho);

router.delete('/:id/destroy', tinhthanhphoController.destroyTinhThanhPho);

router.get('/kho-luu-tru', tinhthanhphoController.storedTinhThanhPho);

router.get('/', tinhthanhphoController.getTinhThanhPho);

module.exports = router;

const express = require('express');
const router = express.Router();

const donhangController = require('../app/controllers/DonHangController');

router.post('/', donhangController.postDonHang);

router.put('/:id', donhangController.updateDonHang);

router.patch('/:id/restore', donhangController.restoreDonHang);

router.delete('/:id/storage', donhangController.deleteDonHang);

router.delete('/:id/destroy', donhangController.destroyDonHang);

router.get('/kho-luu-tru', donhangController.storedDonHang);

router.get('/', donhangController.getDonHang);

module.exports = router;

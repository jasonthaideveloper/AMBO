const express = require('express');
const router = express.Router();

const khachhangController = require('../app/controllers/KhachHangController');

router.post('/', khachhangController.postKhachHang);

router.put('/:id', khachhangController.updateKhachHang);

router.patch('/:id/restore', khachhangController.restoreKhachHang);

router.delete('/:id/storage', khachhangController.deleteKhachHang);

router.delete('/:id/destroy', khachhangController.destroyKhachHang);

router.get('/kho-luu-tru', khachhangController.storedKhachHang);

router.get('/', khachhangController.getKhachHang);

module.exports = router;

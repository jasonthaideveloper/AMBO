const express = require('express');
const router = express.Router();

const sanphamController = require('../app/controllers/SanPhamController');

router.post('/', sanphamController.postSanPham);

router.put('/:id', sanphamController.updateSanPham);

router.patch('/:id/restore', sanphamController.restoreSanPham);

router.delete('/:id/storage', sanphamController.deleteSanPham);

router.delete('/:id/destroy', sanphamController.destroySanPham);

router.get('/kho-luu-tru', sanphamController.storedSanPham);

router.get('/', sanphamController.getSanPham);

module.exports = router;

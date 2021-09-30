const express = require('express');
const router = express.Router();

const loaisanphamController = require('../app/controllers/LoaiSanPhamController');

router.post('/', loaisanphamController.postLoaiSanPham);

router.put('/:id', loaisanphamController.updateLoaiSanPham);

router.patch('/:id/restore', loaisanphamController.restoreLoaiSanPham);

router.delete('/:id/storage', loaisanphamController.deleteLoaiSanPham);

router.delete('/:id/destroy', loaisanphamController.destroyLoaiSanPham);

router.get('/kho-luu-tru', loaisanphamController.storedLoaiSanPham);

router.get('/', loaisanphamController.getLoaiSanPham);

module.exports = router;

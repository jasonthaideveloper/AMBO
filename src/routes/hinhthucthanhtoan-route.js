const express = require('express');
const router = express.Router();

const hinhthucthanhtoanController = require('../app/controllers/HinhThucThanhToanController');

router.post('/', hinhthucthanhtoanController.postHinhThucThanhToan);

router.put('/:id', hinhthucthanhtoanController.updateHinhThucThanhToan);

router.patch('/:id/restore', hinhthucthanhtoanController.restoreHinhThucThanhToan);

router.delete('/:id/storage', hinhthucthanhtoanController.deleteHinhThucThanhToan);

router.delete('/:id/destroy', hinhthucthanhtoanController.destroyHinhThucThanhToan);

router.get('/kho-luu-tru', hinhthucthanhtoanController.storedHinhThucThanhToan);

router.get('/', hinhthucthanhtoanController.getHinhThucThanhToan);

module.exports = router;

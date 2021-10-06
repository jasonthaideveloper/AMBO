const express = require('express');
const router = express.Router();

const hinhthucvanchuyenController = require('../app/controllers/HinhThucVanChuyenController');

router.post('/', hinhthucvanchuyenController.postHinhThucVanChuyen);

router.put('/:id', hinhthucvanchuyenController.updateHinhThucVanChuyen);

router.patch('/:id/restore', hinhthucvanchuyenController.restoreHinhThucVanChuyen);

router.delete('/:id/storage', hinhthucvanchuyenController.deleteHinhThucVanChuyen);

router.delete('/:id/destroy', hinhthucvanchuyenController.destroyHinhThucVanChuyen);

router.get('/kho-luu-tru', hinhthucvanchuyenController.storedHinhThucVanChuyen);

router.get('/', hinhthucvanchuyenController.getHinhThucVanChuyen);

module.exports = router;

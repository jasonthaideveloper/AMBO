const express = require('express');
const router = express.Router();

const khoiluongController = require('../app/controllers/KhoiLuongController');

router.post('/', khoiluongController.postKhoiLuong);

router.put('/:id', khoiluongController.updateKhoiLuong);

router.patch('/:id/restore', khoiluongController.restoreKhoiLuong);

router.delete('/:id/storage', khoiluongController.deleteKhoiLuong);

router.delete('/:id/destroy', khoiluongController.destroyKhoiLuong);

router.get('/kho-luu-tru', khoiluongController.storedKhoiLuong);

router.get('/', khoiluongController.getKhoiLuong);

module.exports = router;

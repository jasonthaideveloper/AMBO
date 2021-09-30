const express = require('express');
const router = express.Router();

const kichthuocController = require('../app/controllers/KichThuocController');

router.post('/', kichthuocController.postKichThuoc);

router.put('/:id', kichthuocController.updateKichThuoc);

router.patch('/:id/restore', kichthuocController.restoreKichThuoc);

router.delete('/:id/storage', kichthuocController.deleteKichThuoc);

router.delete('/:id/destroy', kichthuocController.destroyKichThuoc);

router.get('/kho-luu-tru', kichthuocController.storedKichThuoc);

router.get('/', kichthuocController.getKichThuoc);

module.exports = router;

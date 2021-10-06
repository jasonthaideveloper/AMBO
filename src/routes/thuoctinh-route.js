const express = require('express');
const router = express.Router();

const thuoctinhController = require('../app/controllers/ThuocTinhController');

router.post('/', thuoctinhController.postThuocTinh);

router.put('/:id', thuoctinhController.updateThuocTinh);

router.patch('/:id/restore', thuoctinhController.restoreThuocTinh);

router.delete('/:id/storage', thuoctinhController.deleteThuocTinh);

router.delete('/:id/destroy', thuoctinhController.destroyThuocTinh);

router.get('/kho-luu-tru', thuoctinhController.storedThuocTinh);

router.get('/', thuoctinhController.getThuocTinh);

module.exports = router;

const express = require('express');
const router = express.Router();

const nhacungcapController = require('../app/controllers/NhaCungCapController');

router.post('/', nhacungcapController.postNhaCungCap);

router.put('/:id', nhacungcapController.updateNhaCungCap);

router.patch('/:id/restore', nhacungcapController.restoreNhaCungCap);

router.delete('/:id/storage', nhacungcapController.deleteNhaCungCap);

router.delete('/:id/destroy', nhacungcapController.destroyNhaCungCap);

router.get('/kho-luu-tru', nhacungcapController.storedNhaCungCap);

router.get('/', nhacungcapController.getNhaCungCap);

module.exports = router;

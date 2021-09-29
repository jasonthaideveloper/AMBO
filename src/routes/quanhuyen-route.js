const express = require('express');
const router = express.Router();

const quanhuyenController = require('../app/controllers/QuanHuyenController');

router.post('/', quanhuyenController.postQuanHuyen);

router.put('/:id', quanhuyenController.updateQuanHuyen);

router.patch('/:id/restore', quanhuyenController.restoreQuanHuyen);

router.delete('/:id/storage', quanhuyenController.deleteQuanHuyen);

router.delete('/:id/destroy', quanhuyenController.destroyQuanHuyen);

router.get('/kho-luu-tru', quanhuyenController.storedQuanHuyen);

router.get('/', quanhuyenController.getQuanHuyen);

module.exports = router;

const express = require('express');
const router = express.Router();

const thetichController = require('../app/controllers/TheTichController');

router.post('/', thetichController.postTheTich);

router.put('/:id', thetichController.updateTheTich);

router.patch('/:id/restore', thetichController.restoreTheTich);

router.delete('/:id/storage', thetichController.deleteTheTich);

router.delete('/:id/destroy', thetichController.destroyTheTich);

router.get('/kho-luu-tru', thetichController.storedTheTich);

router.get('/', thetichController.getTheTich);

module.exports = router;

const express = require('express');
const router = express.Router();

const donvitinhController = require('../app/controllers/DonViTinhController');

router.post('/', donvitinhController.postDonViTinh);

router.put('/:id', donvitinhController.updateDonViTinh);

router.patch('/:id/restore', donvitinhController.restoreDonViTinh);

router.delete('/:id/storage', donvitinhController.deleteDonViTinh);

router.delete('/:id/destroy', donvitinhController.destroyDonViTinh);

router.get('/kho-luu-tru', donvitinhController.storedDonViTinh);

router.get('/', donvitinhController.getDonViTinh);

module.exports = router;

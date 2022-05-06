const upload = require('../app/middleware/upload-img');
const express = require('express');
const router = express.Router();

const tongquanController = require('../app/controllers/TongQuanController');

//router.post('/uploads', upload.single("file"), tongquanController.posthinh);

//router.get('/uploads', tongquanController.getTongQuan);

router.get('/', tongquanController.getTongQuan);


module.exports = router;

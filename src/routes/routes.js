const sanphamRouter = require('./sanpham-route');
const loaisanphamRouter = require('./loaisanpham-route');
const donvitinhRouter = require('./donvitinh-route');
const thuoctinhRouter = require('./thuoctinh-route');
const thetichRouter = require('./thetich-route');
const kichthuocRouter = require('./kichthuoc-route');
const quanhuyenRouter = require('./quanhuyen-route');
const tinhthanhphoRouter = require('./tinhthanhpho-route');
const hinhthucthanhtoanRouter = require('./hinhthucthanhtoan-route');
const hinhthucvanchuyenRouter = require('./hinhthucvanchuyen-route');
const khachhangRouter = require('./khachhang-route');
const nhacungcapRouter = require('./nhacungcap-route');
const donhangRouter = require('./donhang-route');
const tongquanRouter = require('./tongquan-route');

function route(app) {
    app.use('/loai-san-pham', loaisanphamRouter);

    app.use('/don-vi-tinh', donvitinhRouter);

    app.use('/thuoc-tinh', thuoctinhRouter);

    app.use('/the-tich', thetichRouter);

    app.use('/kich-thuoc', kichthuocRouter);

    app.use('/quan-huyen', quanhuyenRouter);

    app.use('/tinh-thanh-pho', tinhthanhphoRouter);

    app.use('/hinh-thuc-thanh-toan', hinhthucthanhtoanRouter);
    
    app.use('/hinh-thuc-van-chuyen', hinhthucvanchuyenRouter);

    app.use('/nha-cung-cap', nhacungcapRouter);

    app.use('/khach-hang', khachhangRouter);

    app.use('/san-pham', sanphamRouter);

    app.use('/don-hang', donhangRouter);

    app.use('/', tongquanRouter);
}

module.exports = route;

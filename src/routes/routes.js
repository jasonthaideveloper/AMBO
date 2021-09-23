const sanphamRouter = require('./sanpham-route');
const thuoctinhchungRouter = require('./thuoctinhchung-route');
const khachhangRouter = require('./khachhang-route');
const nhacungcapRouter = require('./nhacungcap-route');
const donhangRouter = require('./donhang-route');
const tongquanRouter = require('./tongquan-route');

function route(app) {
    app.use                          ('/thuoc-tinh-chung', thuoctinhchungRouter);

    app.use('/nha-cung-cap', nhacungcapRouter);

    app.use('/khach-hang', khachhangRouter);

    app.use('/san-pham', sanphamRouter);

    app.use('/don-hang', donhangRouter);

    app.use('/',                              tongquanRouter);
}

module.exports = route;

const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

class TongQuanController {
    // [GET] /thuoc-tinh-chung
    getTongQuan(req, res) {
        res.render('tong-quan');
    }

    getHinh(req, res, next) {
        let gfs;
        const file = gfs.files.findOne({ filename: req.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    }

    posthinh(req, res, next) {
        if (req.file === undefined) return res.send("you must select a file.");
        const imgUrl = `http://localhost:8080/uploads/${req.file.filename}`;
        return res.send(imgUrl);
        //const form = new IncomingForm();
        //form.uploadDir = "/uploads";
        //form.keepExtensions = true;
        //form.parse(req, (err, fields, files) => {
        //if (err) {
        //next(err);
        //return;
        //}
        //res.json({ fields, files });
        // var oldPath = files.profilePic.path;
        // var newPath = '/uploads';
        //     + '/' + files.profilePic.name
        // var rawData = fs.readFileSync(oldPath)

        // fs.writeFile(newPath, rawData, function (err) {
        //     if (err) console.log(err)
        //     return res.send("Successfully uploaded")
        // })
        //});

        // var form = new formidable.IncomingForm();
        // form.uploadDir = path.join(__dirname, 'public/uploads');
        // form.keepExtensions = true;
        // form.maxFileSize = 20 * 1024 * 1024; //20mb
        // form.maxFieldsSize = 20 * 1024 * 1024; //20mb
        // form.multiples = true;
        // form.allowEmptyFiles = false;
        // form.parse(req, (err, fields, files) => {
        //     console.log("file", files);
        //     //check error
        //     if (err) {
        //         res.json({
        //             result: "failed",
        //             data: {},
        //             message: `Cannot upload images. Error is: ${err}`
        //         });
        //     }
        //     //console.log("files", files);
        //     var arrayOfFiles = files[""];
        //     console.log("array of file", arrayOfFiles);
        //     if (arrayOfFiles.length > 0) {
        //         var fileNames = [];
        //         arrayOfFiles.forEach((eachFile) => {
        //             fileNames.path(eachFile.path)
        //         });
        //         res.json({
        //             result: "ok",
        //             data: fileNames,
        //             numberOfImages: fileNames.length,
        //             message: "Upload images successfully"
        //         });
        //     } else {
        //         res.json({
        //             result: "failed",
        //             data: {},
        //             numberOfImages: 0,
        //             message: "No images to uploads!"
        //         });
        //     }
        // });
        // res.send('/uploads');
        // if (req.url === '/uploads' && req.method.toLowerCase() === 'post') {
        //     //Khởi tạo form
        //     var form = new formidable.IncomingForm();
        //     form.keepExtensions = true;
        //     form.maxFileSize = 20 * 1024 * 1024; //20mb
        //     form.maxFieldsSize = 20 * 1024 * 1024; //20mb
        //     form.multiples = true;
        //     form.allowEmptyFiles = false;
        //     console.log('form', form);
        //     //Thiết lập thư mục chứa file trên server
        //     form.uploadDir = path.join(__dirname, 'public/uploads');
        //     //xử lý upload
        //     form.parse(req, (err, fields, files) => {
        //         //path tmp trên server
        //         var path = files.imgURL.filepath;
        //         console.log("file path to server", path);
        //         //thiết lập path mới cho file
        //         var newpath = form.uploadDir + files.filename;
        //         fs.rename(function (err) {
        //             if (err) throw err;
        //             res.end('Upload Thanh cong!');
        //         });
        //     });
        //     return;
        // }
    }

    deleteHinh(req, res, next) {
        gfs.files.deleteOne({ filename: req.params.filename });
        res.send("success");
    }
}

module.exports = new TongQuanController();

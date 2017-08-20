const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homepageController');
const contactController = require('../controllers/contactController');
const singleImgController = require('../controllers/singleImgController');
const editController = require('../controllers/editController');
const deleteController = require('../controllers/deleteController');
const newprojectController = require('../controllers/newprojectController');
const connection = require('../data/connection');

var fs = require('fs');
var multer = require('multer');
var upload = multer({
    dest: 'views/uploads/'
});
var type = upload.single('recfile');
var path = require('path');

router.get('/', homeController.indexPage);
router.get('/home', homeController.homePage);
router.get('/print', homeController.print);
router.get('/web', homeController.web);
router.get('/photography', homeController.photo);
router.get('/applications', homeController.apps);
router.get('/views/:id', singleImgController.single);
router.get('/edit/:id', editController.edit);
router.get('/delete/:id', deleteController.delete);
router.get('/new', newprojectController.new);
router.get('/contact', contactController.contactPage);
router.post('/upload', type, (req, res) => {
    console.log(req.body);
    var tmp_path = req.file.path;
    var target_path = path.join(req.file.destination, req.file.originalname);
    var src = fs.createReadStream(tmp_path);
    var dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    src.on('end', function () {
        fs.unlink(tmp_path);
        res.redirect('/home');
    });
    src.on('error', function (err) {
        fs.unlink(tmp_path);
        res.send('error');
    });
    var now = new Date();
    var dat = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate();
    console.log(dat)
    var file_image = target_path.split("views")[1];
    var path1 = file_image.split("uploads")[0] + 'uploads/';
    var path2 = file_image.split("uploads")[1];
    file_image = path1 + path2;
    var sql = 'INSERT INTO projects (title,author,description,category,src,date) VALUES(?,?,?,?,?,?)';
    var values = [req.body.title, req.body.author, req.body.Description, req.body.Category, file_image, dat];
    connection.query(sql, values, (err, result) => {
        if (err) throw err;
    })
})
module.exports = router;

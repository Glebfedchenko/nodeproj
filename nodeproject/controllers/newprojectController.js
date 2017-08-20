const connection = require('../data/connection');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const upload = multer({
    dest: 'views/uploads'
})
const type = upload.single('singlefile')

exports.new = (req, res) => {
    res.render('new');
}

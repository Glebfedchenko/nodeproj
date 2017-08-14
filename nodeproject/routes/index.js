const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homepageController');
const contactController = require('../controllers/contactController');
const singleImgController = require('../controllers/singleImgController');

router.get('/', homeController.homePage);
router.get('/print',homeController.print);
router.get('/web',homeController.web);
router.get('/photography',homeController.photo);
router.get('/applications',homeController.apps);
router.get('/:id',singleImgController.single);
router.get('/contact',contactController.contactPage);

module.exports = router;

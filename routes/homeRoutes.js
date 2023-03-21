const router = require('express').Router();
const galleryController = require('../controllers/galleryController');
const paintingController = require('../controllers/paintingController');

// route to create/add a home using async/await
router.get('/', galleryController.getGalleries);
router.get('/gallery/:id', galleryController.getSingleGallery);
router.get('/painting/:id', paintingController.getSinglePainting);

module.exports = router;
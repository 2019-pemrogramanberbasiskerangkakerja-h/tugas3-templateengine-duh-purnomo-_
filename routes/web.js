const express = require('express');
const router = express.Router();

// DEKLARASI CONTROLLER
const HomeController = require('../controller/HomeController');

// ROUTINGNYA
router.get('/', HomeController.home);
router.get('/pendidikan', HomeController.pendidikan);
router.get('/pengalaman', HomeController.pengalaman);

module.exports = router;

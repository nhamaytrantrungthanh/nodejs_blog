const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/SiteController');

// newsController.index
router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/SiteController');

// newsController.index
router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;

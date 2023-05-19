const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /news
    index(req, res) {
        
        Course.find({}) 
            .then(course => {
                res.render('home', { 
                    courses: multipleMongooseToObject(course)
                });    
            })
            .catch(next);
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

const SiteController = require('./SiteController');

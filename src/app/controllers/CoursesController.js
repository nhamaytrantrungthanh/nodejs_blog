const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
const { create, updateMany } = require('../models/Course');

class CoursesController {
    // [GET] /news
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => 
                res.render('courses/show', { course: mongooseToObject(course),
                }),
            )
            .catch(next);
        }    
    // GET /courses/create
        create(req, res, next) {
            res.render('courses/create');
        }
    // [POST] /courses/store
        store(req, res, next) {

            req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg");`
            
                    const course = new Course(req.body);
                    course
                        .save()
                        .then(() => res.redirect('/me/stored/course'))
                        .catch(next);
        }
         // GET /courses/edit
         create(req, res, next) {
            Course.findById(req.params.id)
                .then(courses => res.render('courses/edit', {
                    courses: mongooseToObject(course)
                }))
                .catch(next);
            }   
         // [PUT] /courses/:id
          update(req, res, next) {
                CoursesController.updateOne({_id: req.params.id }, req.body)
                    .then(() => res.redirect('/me/stored/courses'))
                    .catch(next);
          }   
        // [DELETE] /courses/:id
          destroy(req, res, next) {
                Course.delete({ _id: req.params.id })
                    .then(() => res.redirect('back'))
                    .catch(next);
          }
        // [DELETE] /courses/:id/force
          forceDestroy(req, res, next) {
                Course.delete({ _id: req.params.id })
                    .then(() => res.redirect('back'))
                    .catch(next);
          }
        // [PATCH] /courses/:id/restore
          restore(req, res, next) {
                Course.delete({ _id: req.params.id })
                    .then(() => res.redirect('back'))
                    .catch(next);
          }
        // [POST] /courses/handle-form-actions
        handleFormActions(req, res, next) {
            switch(req.body.action) {
                case 'delete':
                    Course.delete ({ _id: '$in: req.body.courseIds' }) 
                        .then(() => res.redirect('back'))
                        .catch(next);
                        break;
                    default:
                        res.json({ message: 'Action is invalid!' });
            }
        } 
}

// GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD
module.exports = new CoursesController();



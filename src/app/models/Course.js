const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const CourseSchema = new Schema({
    _id: { type: number, },
    name: { type: String, required: true, },
    description: { type: String },
    image: { type: String, },
    videoId: { type: String, required: true, },
    level: { type: String, },
    slug: { type: String, slug: 'name', unique: true },
    }, 
    { 
        _id: false,
        timestamps: true,
    },    
);
// Custom query  helpers
CourseSchema.query.sorttable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        courseQuery = courseQuery.sort({
            const isValidtype = ['asc', 'desc'].includes(req.query.type)
            return this.sort({
                [req.query.column]: isValidtype ? req.query.type: 'desc',
            });
        })
}
    return this;
}

// Add plugins
mongoose.plugin(slug);
CourseSchema.plugin(AutoIncrement);
CourseSchema.plugin(mongooseDelete, {
    deletedAt : true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', CourseSchema);
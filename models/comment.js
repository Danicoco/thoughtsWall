const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    commentBody: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('Comment', commentSchema);
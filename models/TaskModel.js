const mongoose = require('mongoose')

const tasksSchem = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: Text,
        required: true
    },
    iscompleted: {
        type: Boolean,
        default: false
    },
    completed_at: {
        type: Date
    }
});

const taskModel = mongoose.model('task', tasksSchem);

module.exports = taskModel
import { Schema, model } from 'mongoose';

const weekListModel = new Schema( {
    Title: {
        type: String
    },
    created_at: {
        type: Date,
        default: new Date(Date.now())
    },
    updated_at: {
        type: Date
    },
    updation_end_time: {
        type: Date,
        default: new Date(Date.now() + 86400 * 1000)
    },
    weeklist_end_time: {
        type: Date,
        default: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000))
    },
    isComplete: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ['active','inactive','completed'],
        default: 'active'
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'task'
    }]
})

const weeklistModel = model('weeklist', weekListModel);

module.exports = weekListModel;
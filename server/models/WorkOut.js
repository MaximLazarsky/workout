const {Schema, model, ObjectId} = require('mongoose')

const WorkOut = new Schema({
    userId: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
    exercises: [{
        exerciseId: {type: Schema.Types.ObjectId},
        repeats: {type: Number},
        measurment: {type: Number}
    }],
    date: {type: String}
})

module.exports = model('WorkOut', WorkOut)
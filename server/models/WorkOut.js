const {Schema, model, ObjectId} = require('mongoose')

const WorkOut = new Schema({
    userId: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
    exercisesId: [{
        type: Schema.Types.ObjectId, required: true, ref: 'Exercises'
    }],
    date: {type: String}
})

module.exports = model('WorkOut', WorkOut)
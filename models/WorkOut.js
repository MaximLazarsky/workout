const {Schema, model, ObjectId} = require('mongoose')

const WorkOut = new Schema({
    user: [{type: ObjectId, ref: 'User'}],
    exercises: [{type: ObjectId, ref: 'Exercises'}]
})

module.exports = model('WorhOut', WorkOut)
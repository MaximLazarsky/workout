const {Schema, model, ObjectId} = require('mongoose')

const Exercises = new Schema ({
    exerName: {type: String, required: true},
    mesurType: {type: String, required:true},
    userId: {type: ObjectId, ref: 'User'}
})

module.exports = model('Exercises', Exercises)
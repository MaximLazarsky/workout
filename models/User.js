const { Schema, model, ObjectId} = require('mongoose')

const User = new Schema ({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // workOut: [{ type: ObjectId, ref: 'WorkOut'}],
    // exercises: [{type: ObjectId, ref: 'Exercises'}]
    verificationCode: {type: Number, required: true},
    active: {type: Boolean, required: true}
})

module.exports = model("User", User)
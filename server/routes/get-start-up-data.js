const Router = require("express")
const User = require('../models/User')
const Exercises = require('../models/Exercises')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {passport, useAuthMW} = require("../middleware/auth-midleware")
const ExtractJwt = require('passport-jwt').ExtractJwt

const router = new Router()

router.get('/', useAuthMW(), async(req, res) => {
    try {
    
        const user = await User.findById(req.user._id).populate('exercises').populate(
            {path: 'workOut', model: 'WorkOut',
      populate: { path: 'exercises.exerciseId', model: 'Exercises' }
    }
        )

        return res.json({
            userId: user._id,
            email: user.email,
            exercises: user.exercises,
            workout: user.workOut
        }) 

    } catch(e) {
        console.log (e)
        res.send({message: "Server error"})
    }
})

module.exports = router
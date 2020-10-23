const Router = require("express")
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {passport, useAuthMW} = require("../middleware/auth-midleware")
const ExtractJwt = require('passport-jwt').ExtractJwt

const router = new Router()

router.post('/registration', async (req, res) => {
    try {
        const {email, password} = req.body

        const checkUser = await User.findOne({email})

        if(checkUser) {
            return res.status(400).json({message: "User with this email already exists"})
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const verificationCode = `${Math.floor((Math.random()*10000))}`

        const user = new User({email, password: hashPassword, verificationCode, active:false})

        const link = `/verify?email=${email}`

        await user.save()
        console.log(verificationCode, link)
        return res.json({link, verificationCode})

    } catch(e) {
        console.log (e)
        res.send({message: "Server error"})
    }
})

router.post('/verification', async (req, res) => {
    try {

       const {email, verificationCode} = req.body

       const user = await User.findOne({email})

       if(verificationCode !== user.verificationCode) {
           return res.status(400).json({message: "Uncorrect code"})
       }

       await user.updateOne({active:true})

       const token = jwt.sign({id: user.id}, config.get('secretKey', {expiresIn: '1h'}))
       
       return res.json({
           token,
           message: "verefication done",
           active: user.active
       })

    } catch(e) {
        console.log (e)
        res.send({message: "Server error"})
    }
})

router.post('/login', async (req, res) => {
    try {

       const {email, password} = req.body

       const user = await User.findOne({email})

       if(!user) {
           return res.status(400).json({message: "User not exsists, please  go to registration"})
       }

       const isPassValid = bcrypt.compareSync(password, user.password)
       if(!isPassValid) {
           return res.status(400).json({message: "Uncorrect password"})
       }

       if (!user.active) {
        return res.status(400).json({message: "Please verificate"})
       }

       const token = jwt.sign({id: user.id}, config.get('secretKey', {expiresIn: '1h'}))
       return res.json({
           token
       })

    } catch(e) {
        console.log (e)
        res.send({message: "Server error"})
    }
})

router.get('/', useAuthMW(), async(req, res) => {
    try {
    
        const user = await User.findById(req.user._id)
        const userId = user._id
        const email = user.email

        return res.json({
            userId,
            email
        })

    } catch(e) {
        console.log (e)
        res.send({message: "Server error"})
    }
})

module.exports = router
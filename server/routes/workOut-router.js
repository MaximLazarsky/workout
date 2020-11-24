const Router = require('express')
const {passport, useAuthMW} = require('../middleware/auth-midleware')
const WorkOut = require('../models/WorkOut')
const User = require('../models/User')

const router = new Router()

router.use(useAuthMW())

router.put('/:id', async (req, res) => {

    try{
        let workout = await WorkOut.findByIdAndUpdate({_id: req.params.id}, {exercises: req.body.workout}, {new: true})
        return res.json({
            message:"Workout was update",
            workout
    })

    } catch(e) {
        console.log (e)
        res.send({message: "Server error"}) 
    }
})

router.post('/', async (req, res) => {
    try {
        date = new Date(Date.now())
        dateToday = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

        const workOut = new WorkOut({userId: req.user, exercises: req.body.exercises, date: req.body.date || dateToday}) 

        await workOut.save()


        const user = await User.findById(req.user)
        await user.workOut.push(workOut.id)
        await user.save()

        return res.json({
            message: "Workout was create",
            workOut
        })
        
    } catch(e) {
        console.log (e)
        res.send({message: "Server error"}) 
    }
})

router.get('/:userId', async (req, res) => {
    try {

        const workOutList = await WorkOut.find({userId: req.params.userId})

        if(!workOutList) {
            return res.json({message: "You don't have workout"})
        }

        return res.json({
            workOutList
        })

    } catch(e) {
        console.log (e)
        res.send({message: "Server error"}) 
    }
})

module.exports = router
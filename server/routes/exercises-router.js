const Router = require("express")
const {passport, useAuthMW} = require("../middleware/auth-midleware")
const Exercises = require('../models/Exercises')
const User = require("../models/User")
const WorkOut = require('../models/WorkOut')

const router = new Router()

router.use(useAuthMW())

router.put('/', async (req, res) => {

    try{
        const exercisesList = await Promise.all(req.body.map(async (exercise) => {
            return  await Exercises.findByIdAndUpdate(
                {_id: exercise._id},
                {exerName: exercise.exerName, mesurType: exercise.mesurType},
                {new:true}
            )
        }))

        const user = await User.findById(req.user._id)
        user.exercises = exercisesList.map(ex => ({_id: ex._id}))
        await user.save()

        return res.json({
            message:"Exsercise was update",
            exercisesList
    })

    } catch(e) {
        console.log (e)
        res.send({message: "Server error"}) 
    }
})

router.delete('/:id', async (req, res) => {

    try{
        
        await Exercises.findByIdAndDelete(req.params.id)

        const workOutList = await WorkOut.find({userId: req.user._id})

        workOutList.map(workout => 
        workout.exercises = workout.exercises.filter(ex => ex.exerciseId.toString() !== req.params.id))

        for await(let workout of workOutList) {
            await workout.save()
        }
        
        const user = await User.findById(req.user._id)
        await user.exercises.splice(user.exercises.indexOf(req.params.id), 1)
        await user.save()
        

        return res.json({message:"Exersise was deleted"})

    } catch(e) {
        console.log (e)
        res.send({message: "Server error"}) 
    }
})

router.post('/:userId', async (req, res) => {
    try {

        const exercise = new Exercises({userId: req.params.userId, exerName: req.body.exerName, mesurType: req.body.mesurType})
        await exercise.save()
    

        const user = await User.findById(req.params.userId)
        await user.exercises.push(exercise.id)
        await user.save()

        return res.json({
            message: "Exercise was created",
            exercise
        })

    } catch(e) {
        console.log (e)
        res.send({message: "Server error"}) 
    }
})

module.exports = router
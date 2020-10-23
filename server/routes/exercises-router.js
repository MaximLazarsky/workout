const Router = require("express")
const {passport, useAuthMW} = require("../middleware/auth-midleware")
const Exercises = require('../models/Exercises')
const WorkOut = require('../models/WorkOut')

const router = new Router()

router.use(useAuthMW())

router.put('/:id', async (req, res) => {

    try{
        const {exerName, mesurType} = req.body
        let exercise = await Exercises.findByIdAndUpdate({_id: req.params.id}, {exerName, mesurType}, {new: true})
        
        return res.json({
            message:"Exsercise was update",
            exercise
    })

    } catch(e) {
        console.log (e)
        res.send({message: "Server error"}) 
    }
})

router.delete('/:id', async (req, res) => {

    try{
    
        await Exercises.findByIdAndDelete(req.params.id)

        const workOutList = await WorkOut.find({exercisesId: req.params.id})
        for (let element of workOutList) {
            element.exercisesId.splice(element.exercisesId.indexOf(req.params.id), 1)
            await element.save()
        }
        
        

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
        return res.json({
            message: "Exercise was created",
            exercise
        })

    } catch(e) {
        console.log (e)
        res.send({message: "Server error"}) 
    }
})

router.get('/:userId', async (req, res) => {
    try {
        const exercises = await Exercises.find({userId: req.params.userId})

        if(!exercises) {
            return res.json({message: "You dont have exercises"})
        }

        return res.json({
            exercises
        }) 

    } catch(e) {
        console.log (e)
        res.send({message: "Server error"}) 
    }
})

module.exports = router
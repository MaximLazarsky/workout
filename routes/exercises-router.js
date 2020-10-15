const Router = require("express")
const {passport} = require("../middleware/auth-midleware")
const Exercises = require('../models/Exercises')
const WorkOut = require('../models/WorkOut')

const router = new Router()

router.put('/:id', async (req, res) => {

    try{
        const {exerName, mesurType} = req.body
        let exercises = await Exercises.findByIdAndUpdate(req.params.id)
        
        exercises.exerName = exerName
        exercises.mesurType = mesurType
        await exercises.save()
        return res.json({
            message:"Exsercise was update",
            exercises
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

router.use(passport.authenticate('jwt',{session: false}))

router.post('/:userId', async (req, res) => {
    try {

        const exercises = new Exercises({userId: req.params.userId, exerName: req.body.exerName, mesurType: req.body.mesurType})
        await exercises.save()
        return res.json({
            message: "Exercise was created",
            exercises
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
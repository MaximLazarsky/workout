const Router = require('express')
const {passport, useAuthMW} = require('../middleware/auth-midleware')
const WorkOut = require('../models/WorkOut')

const router = new Router()

router.put('/:id', async (req, res) => {

    try{
        const {exercisesId} = req.body
        let workout = await WorkOut.findByIdAndUpdate({_id: req.params.id}, {exercisesId}, {new: true})
        
        return res.json({
            message:"Workout was update",
            workout
    })

    } catch(e) {
        console.log (e)
        res.send({message: "Server error"}) 
    }
})

router.use(useAuthMW())

router.post('/:userId', async (req, res) => {
    try {
        date = new Date(Date.now())
        dateToday = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`

        const workOut = new WorkOut({userId: req.params.userId, exercisesId: req.body.exercisesId, date: req.body.date || dateToday}) 
        await workOut.save()
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
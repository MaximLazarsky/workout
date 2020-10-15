const Router = require('express')
const {passport} = require('../middleware/auth-midleware')
const WorkOut = require('../models/WorkOut')

const router = new Router()

router.use(passport.authenticate('jwt',{session: false}))

router.post('/:userId', async (req, res) => {
    try {

        const workOut = new WorkOut({userId: req.params.userId, exercisesId: req.body.exercisesId}) 
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

module.exports = router
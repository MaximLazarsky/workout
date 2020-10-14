const Router = require("express")
const authMidleware = require("../middleware/auth-midleware")
const Exercises = require('../models/Exercises')

const router = new Router()
router.use(authMidleware)

router.post('/', async (req, res) => {
    try {
        const {exerName, mesurType} = req.body
 
        const exercises = new Exercises({user: req.params.userId, exerName, mesurType})
        await exercises.save()
        return res.json({message: "Exercise was created"})

    } catch(e) {
        console.log (e)
        res.send({message: "Server error"}) 
    }
})

router.get('/:userId', async (req, res) => {
    try {
        const exercises = await Exercises.find({user: new ObjectId})

        if(!exercises) {
            return res.json({message: "You dont have exercises"})
        }

        return res.json({
            exercises: {
                exerName,
                mesurType
            }
        }) 

    } catch(e) {
        console.log (e)
        res.send({message: "Server error"}) 
    }
})

module.exports = router
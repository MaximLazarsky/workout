const express = require('express')
const mogoose = require('mongoose')
const config = require('config')
const cors = require('cors')
const authRouter = require('./routes/auth-router')
const exercisesRouter = require('./routes/exercises-router')
const workOutRouter = require('./routes/workOut-router')

const app = express()
const PORT = config.get('serverPort')

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/exercises', exercisesRouter)
app.use('/api/workout', workOutRouter)

async function start(){
    try{
        
        await mogoose.connect(config.get('dbUrl'),{useNewUrlParser: true, useUnifiedTopology: true }, 
        (err) => {
            if (err)
                console.error(err);
            else
                console.log("Connected to the mongodb"); 
        })
        
        app.listen(PORT, () => {
            console.log("server has started on:", PORT)
        })
    } catch(e) {

    }
}

start()
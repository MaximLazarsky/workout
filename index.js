const express = require('express')
const mogoose = require('mongoose')
const config = require('config')
const cors = require('cors')
const auth = require('./routes/auth')
const exercises = require('./routes/exercises')

const app = express()
const PORT = config.get('serverPort')

app.use(cors())
app.use(express.json())
app.use('/api/auth', auth)
app.use('/api/exercises', exercises)

async function start(){
    try{
        await mogoose.connect(config.get('dbUrl'))

        app.listen(PORT, () => {
            console.log("server has started on:", PORT)
        })
    } catch(e) {

    }
}

start()
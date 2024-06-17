const express = require('express')
const app = express()
const port = 4000
let cors = require('cors')

app.use(express.json())
app.use(cors())

const customerRoute = require('./api/route')

app.use('/dataRequested',customerRoute)

app.listen(port, ()=>{
    console.log("working")
})



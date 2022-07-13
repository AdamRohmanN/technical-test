require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const port = 5000

const router = require('./src/routes/router')
app.use(express.json())
app.use(cors())
app.use('/api', router)

app.use('/uploads', express.static(__dirname + '/uploads'))

app.listen(port, console.log("working"))
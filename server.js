const express = require('express')
const dbConnect = require('./dbConnect')

const app = express()

app.use(express.json())

// const path = require('path')

const userRoute = require('./routes/usersRoute')
const transactionsRoute = require('./routes/transactionsRoute')

app.use('/api/users/' , userRoute)
app.use('/api/transactions/' , transactionsRoute)

const port =5000

dbConnect();

app.listen(port, () => console.log(`Node JS Server started at port ${port}!`))
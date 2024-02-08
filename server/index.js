const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const MemberModel = require('./models/Member.js')

const app = express()
app.use(express.json())
app.use(cors())

// connection to database
mongoose.connect("mongodb://127.0.0.1:27017/memberships")

app.post('/register', (req, res) => {
    MemberModel.create(req.body)
    .then(members => res.json(members))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('server is up')
})
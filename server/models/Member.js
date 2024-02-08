const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    username: String,
    password: String
})

const MemberModel = mongoose.model("members", MemberSchema)
module.exports = MemberModel
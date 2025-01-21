const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  serial: Number,
  name: String,
  country: String,
  skill: String,
  baseprice: String,
  finalprice: String,
  status: String,
  team: String,
  year: Number
})

const UserModel = mongoose.model("Users", UserSchema)
module.exports = UserModel
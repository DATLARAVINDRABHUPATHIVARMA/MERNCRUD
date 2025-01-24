const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  serial: Number,
  name: String,
  country: String,
  skill: Array,
  baseprice: String,
  finalprice: String,
  status: Array,
  team: Array,
  year: Array
})

const UserModel = mongoose.model("Users", UserSchema)
module.exports = UserModel
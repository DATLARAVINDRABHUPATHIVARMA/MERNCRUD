const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  serial: {
    type:Number,
    index:true,
    unique:true
  },
  name: String,
  country: Array,
  skill: Array,
  baseprice: String,
  finalprice: String,
  status: Array,
  team: Array,
  year: Array
})

const UserModel = mongoose.model("Users", UserSchema)
module.exports = UserModel
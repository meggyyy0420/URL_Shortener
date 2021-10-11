const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  inputUrl: {
    type: String,
    unique: true,
    required: true
  },
  outputUrl: {
    type: String,
    unique: true,
    required: true
  }
})

module.exports = mongoose.model('Url', urlSchema)
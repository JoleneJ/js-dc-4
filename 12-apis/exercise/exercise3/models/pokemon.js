var mongoose = require('mongoose')
var Schema = mongoose.Schema

var pokemonName = new Schema({
  name: String,
  base_experience: String,
  height: Number,
  moves: Array
})

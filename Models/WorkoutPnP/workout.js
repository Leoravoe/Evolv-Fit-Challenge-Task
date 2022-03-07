const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const exerciseSchema = require("./exercise.js");

const workoutSchema = new Schema({
  name: {
    type: String,
  },
  exercises: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'exercises'
  }],
});

module.exports =  mongoose.model('workouts',workoutSchema);
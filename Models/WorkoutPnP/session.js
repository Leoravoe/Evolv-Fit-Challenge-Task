const mongoose = require("mongoose");
const sessionThemeSchema = require("./sessionTheme");
const workoutSchema = require("./workout");

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  routineRef: {
    type: Schema.Types.ObjectId,
    ref: "Routine",
  },
  workout: {
    type: Schema.Types.ObjectId,
    ref: "workouts",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  userRef: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  trainerRef: {
    type: Schema.Types.ObjectId,
    ref: "trainers",
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('sessions',sessionSchema);
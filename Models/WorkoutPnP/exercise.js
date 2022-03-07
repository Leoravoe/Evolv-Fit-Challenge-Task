const mongoose = require("mongoose");
const exerciseInfoSchema = require("../Admin/exerciseInfo.js");
const Schema = mongoose.Schema;
const exerciseSetSchema = require("./exerciseSet.js");

const exerciseSchema = new Schema({
  exerciseInfoRef: {
    type: Schema.Types.ObjectId,
    ref: "exerciseInfos",
    required: true,
  },
  exerciseInfo: {
    type: exerciseInfoSchema,
  },
  name: {
    type: String,
  },
  exerciseSets: [{
    type: Schema.Types.ObjectId,
    required: true,
  }],
});

module.exports = mongoose.model('exercises',exerciseSchema);
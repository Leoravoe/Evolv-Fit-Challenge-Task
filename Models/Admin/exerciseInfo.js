const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseInfoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('exerciseInfos', exerciseInfoSchema);
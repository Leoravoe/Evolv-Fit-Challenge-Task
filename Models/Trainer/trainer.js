const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trainerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 5,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      lowercase: true,
    },
    userRefs: [{
      type: Schema.Types.ObjectId,
      ref: "users",
    }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('trainers',trainerSchema);
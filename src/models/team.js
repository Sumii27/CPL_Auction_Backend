const mongoose = require("mongoose");
const validator = require("validator");

// defining schema
const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  captain: {
    type: String,
    required: true,
    minlength: 3,
  },
  alias: {
    type: String,
    required: true,
    minlength: 3,
  },
});

// create new collection
const Team = new mongoose.model("Team", teamSchema);
module.exports = Team;

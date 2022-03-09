const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const SkillsSchema = new Schema({
  title: {type: String, required: true},
  votes: Number,
});

module.exports = mongoose.model("Skills", SkillsSchema);
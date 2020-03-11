const mongoose = require('mongoose');
let jobSchema = new mongoose.Schema({
  title: String,
  companyName: String,
  location: String,
  yoe: String,
  money: String,
  jobDescription: String,
  skills: String
});
let Job = new mongoose.model('job', jobSchema);
module.exports = Job;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Job = require('./model/Job')

mongoose.connect('mongodb://shubham:shubham123@ds018168.mlab.com:18168/nn-outh-test')
  .then(() => {
    app.listen(5000, () => console.log('app running on port 5000'))
  })

function connect() {
  
}

app.get('/jobs', (req, res) => {
  Job.count({}, (err, count) => {
    console.log('count', count)
  })
  Job.find({})
    .then((job) => {
      res.send({
        status: true,
        result: job,
        message: "Job found successfullt"
      })
    })
    .catch((err) => {
      res.send({
        status: false,
        message: err
      })
    })
})
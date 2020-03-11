const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Job = require('./model/Job')

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept");
  next();
})

mongoose.connect('mongodb://shubham:shubham123@ds018168.mlab.com:18168/nn-outh-test')
  .then(() => {
    app.listen(5000, () => console.log('app running on port 5000'))
  })
  .catch((err) => {
    console.log(err);
  })

app.get('/jobs/:id', (req, res) => {
  let id = req.params.id;
  let len = parseInt(id-1)*10;
  console.log(len);
  Job.find({})
    .skip(len)
    .limit(10)
    .then((job) => {
      res.send({
        status: true,
        result: job,
        message: "Job found successfully"
      })
    })
    .catch((err) => {
      res.send({
        status: false,
        message: err
      })
    })
})
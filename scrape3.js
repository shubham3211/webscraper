const request = require('request');
const cherio = require('cherio');
const mongoose = require('mongoose');
let Job = require('./model/Job');

// mongoose.connect('mongodb://shubham:shubham123@ds018168.mlab.com:18168/nn-outh-test')
  // .then(() => {
  //   for(let i=2;i<=10;i++){
  //     request(`https://www.monsterindia.com/search/it-computers-hardware-networking-jobs-${i}?searchId=71f14d8c-7391-4b5c-b9ae-32f4cd8beb9f`, (err, res, html) => {
  //       if(!err && res.statusCode==200){
  //         const $ = cherio.load(html);
  //         $('.job-apply-card')
  //           .each((i, el) => {
  //             let jobTitle = $(el).find('.job-tittle');
  //             let title = $(jobTitle).find('.medium a').text().trim();
  //             let companyName = $(jobTitle).find('.company-name a').text().trim()
  //             let location = $(jobTitle).find('.mqfi-location-fill').parent().text().split('\n').join("").split(" ").join("");
  //             let yoe = $(jobTitle).find('.mqfi-bag').parent().text().split('\n').join("").trim();
  //             let money = $(jobTitle).find('.mqfi-coin-stack').parent().text().split('\n').join("").trim();
  //             let jobDescription = $(el).find('.job-descrip').text().trim();
  //             let skills = $(el).find('.descrip-skills label').text().split("\n").join(" ").split(" ").join("").split(",,").join(", ");
  //             let job = new Job({title, companyName, location, yoe, money, jobDescription, skills});
  //             job.save()
  //               .then((result) => {
  //                 console.log(result)
  //               })
  //               .catch((err) => {
  //                 console.error(err);
  //               })
  //           })
  //       }
  //     })
  //   }
  // })

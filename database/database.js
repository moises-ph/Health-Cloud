const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/heatlh_cloud';

mongoose.connect(URL).then(db => {
  console.log('DB is connected');
}).catch(err => {
  console.log(err);
});

module.exports = mongoose;
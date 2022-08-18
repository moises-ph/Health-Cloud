const mongoose = require('mongoose');

const URL = `mongodb+srv://ServerVitalysNow:${process.env.PASS_MONGO}@cluster0.cudzrgk.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(db => {
  console.log('DB is connected');
}).catch(err => {
  console.log(err);
});

module.exports = mongoose;
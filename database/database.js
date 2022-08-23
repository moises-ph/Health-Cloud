const mongoose = require('mongoose');

require('dotenv').config();

const URL = `mongodb+srv://ServerVitalysNow:${process.env.PASS_MONGO}@cluster0.cudzrgk.mongodb.net/VitalysnowDB?retryWrites=true&w=majority`;

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(db => {
  console.log('DB is connected');
}).catch(err => {
  console.log(err);
});

module.exports = mongoose;
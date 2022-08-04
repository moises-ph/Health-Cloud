const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
  num_documento : {type: Number, required: true},
  name: {type: String, required: true},
  lastname: {type: String, required: true},
  age: {type: Number, required: true},
  gender: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  user_type: {type: String, required: true},
  doc_type: {type: String, required: true}
});


const UserData = new Schema({
  num_documento : {type: Number, required: true},
  phone: {type: Number, required: false},
  address: {type: String, required:false},
  city: {type: String, required:false},
  state: {type: String, required:false},
  civil_status: {type: String, required:false},
  stratus: {type: String, required:false},
  date_of_birth: {type: String, required:false},
  ocupation: {type: String, required:false},
  regim: {type: String, required:false},
  blood_type: {type: String, required:false},
  height: {type: Number, required:false},
  weight: {type: Number, required:false},
  allergies: {type: String, required:false},
  diseases: {type: String, required:false},
  surgeries: {type: String, required:false}
});

const UserSchema = mongoose.model('User', User);
const UserDataSchema = mongoose.model('UserData', UserData);

module.exports = { UserSchema, UserDataSchema };
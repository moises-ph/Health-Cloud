const express = require('express');
const router = express.Router();

const { UserSchema, UserDataSchema } = require('../models/users');


router.get('/', (req, res)=>{
  if(req.session.logged){
    res.render('dashboard');
  }
  else{
    res.redirect('/login');
  }
});

router.get('/getData/:id', async(req, res)=>{
  const {id} = req.params;
  const userFind = await UserSchema.findOne({num_documento: id});
  const userDataFind = await UserDataSchema.findOne({num_documento: id});
  const {name, gender ,lastname, email, age, num_documento, doc_type, user_type} = userFind;
  const { address, allergies, blood_type, city, civil_status, date_of_birth, diseases, height, ocupation, phone, regim, state, stratus, surgeries, weight } = userDataFind;
  res.json({
    name,
    lastname,
    gender,
    email,
    age,
    num_documento,
    doc_type,
    user_type,
    address,
    allergies, 
    blood_type,
    city,
    civil_status,
    date_of_birth,
    diseases, 
    height,
    ocupation,
    phone,
    regim,
    state,
    stratus,
    surgeries,
    weight
  });
})

router.put('/change/', (req, res)=>{
  
})

module.exports = router;
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
  res.json({
    name: userFind.name,
    lastname: userFind.lastname,
    gender: userFind.gender,
    email: userFind.email,
    age: userFind.age,
    num_documento: userFind.num_documento,
    doc_type: userFind.num_documento,
    user_type: userFind.user_type,
    userDataFind
  });
})

router.put('/', (req, res)=>{
  
})

module.exports = router;
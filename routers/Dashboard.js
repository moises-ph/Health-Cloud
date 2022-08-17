const express = require('express');
const router = express.Router();

const { UserSchema, UserDataSchema } = require('../models/users');

router.get('/getData/', async(req, res)=>{
  const {num_documento} = req.query;
})

router.put('/change/', (req, res)=>{
  
})

module.exports = router;
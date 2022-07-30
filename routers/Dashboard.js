const express = require('express');
const router = express.Router();

const {db, format} = require('../database/database');


router.get('/', (req, res)=>{
  res.render('dashboard');
})
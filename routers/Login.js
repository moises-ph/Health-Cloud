const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { UserSchema } = require('../models/users');
const jwt = require('jsonwebtoken');
const joi = require('joi');

const schemaLogin = joi.object({
    num_documento: joi.number().required(),
    password: joi.string().min(6).required()
});

router.post('/',async (req, res)=>{
    // Validate Data
    const { error } = schemaLogin.validate(req.body);
    if(error) return res.status(400).json({msg: error.details[0].message});

    const { num_documento, password } = req.body;

    const user = await UserSchema.findOne({num_documento: num_documento});
    if(!user) return res.status(400).json({msg: 'User not found'});

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return res.status(400).json({msg: 'Invalid password'});

    const token = jwt.sign({_id: user._id, numUser : user.num_documento}, process.env.TOKEN_SECRET);

    res.json({msg: 'User logged in', token});

});

module.exports = router;
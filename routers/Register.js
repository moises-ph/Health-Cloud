const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { UserSchema, UserDataSchema } = require('../models/users');
const Joi = require('joi');

const schemRegister = Joi.object({
    num_documento: Joi.number().required(),
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    age: Joi.number().required(),
    gender: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
    user_type: Joi.string().required(),
    doc_type: Joi.string().required()
});

router.post('/', async (req, res)=>{
    // Validate the data
    const { error } = schemRegister.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const { num_documento, name, lastname, age, gender, email, password, user_type, doc_type } = req.body;

    const emailExist = await UserSchema.findOne({email: email});
    if(emailExist) return res.status(400).json({msg: 'Email already exists'});

    const num_documentoExist = await UserSchema.findOne({num_documento: num_documento});
    if(num_documentoExist) return res.status(400).json({msg: 'Document already exists'});

    //hash password
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    //Create a new user

    try{
        const user = new UserSchema({
            num_documento,
            name,
            lastname,
            age,
            gender,
            email,
            password: password_hash,
            user_type,
            doc_type
        });
        const userData = new UserDataSchema({
            num_documento
        });
        await user.save();
        await userData.save();
        res.json({msg: 'User created'});
    }
    catch (error) {
        res.status(400).json({msg: error.message});
    }
});

module.exports = router;
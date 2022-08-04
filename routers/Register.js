const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { UserSchema, UserDataSchema } = require('../models/users');

router.get('/', (req, res)=>{
    res.render('register');
})

router.post('/', async (req, res)=>{
    if(req.session.logged){
        res.redirect('/dashboard');
    }
    else{
        const { userId, name, lastname, password, age, gender, email, userType, docType } = req.body;

        const password_crypt = await bcrypt.hash(password, 10);

        const find = await UserSchema.findOne({num_documento: userId});

        if(find){
            res.json({
                status: 'Error',
                message: 'Usuario ya existe'
            })
        }
        else{
            const UserTask = new UserSchema({
                num_documento: parseInt(userId),
                name,
                lastname,
                age: parseInt(age),
                gender,
                email,
                password: password_crypt,
                user_type: userType,
                doc_type: docType
            });

            const UserDataTask = new UserDataSchema({
                num_documento: parseInt(userId),
                phone:  0,
                address: '0',
                city: '0',
                state: '0',
                civil_status: '0',
                stratus: '0',
                date_of_birth: '0',
                ocupation: '0',
                regim: '0',
                blood_type: '0',
                height: '0',
                weight: 0,
                allergies: 0,
                diseases: '0',
                surgeries: '0'
            })

            await UserTask.save();
            await UserDataTask.save();
            console.log(UserTask);
            res.json({
                status: 'ok',
                message: 'Usuario registrado'
            });
        }
    }

});

module.exports = router;
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { UserSchema, UserDataSchema } = require('../models/users');


router.get('/',(req, res)=>{
    res.render('login');
});

router.post('/',async (req, res)=>{
    if(req.session.logged){
        res.redirect('/dashboard');
    }
    else{
            const { user_id, password } = req.body;
    
            const userFind = await UserSchema.findOne({num_documento: user_id});
            if(!userFind){
                res.json({
                    status: 'Error',
                    message: 'Usuario no existe'
                })
            }
            else{
                const password_crypt = bcrypt.compare(password, userFind.password, (err, result)=>{
                    if(result){
                        req.session.user = userFind.num_documento;
                        req.session.logged = true;
                        res.json({
                            status: 'ok',
                            message: 'Login correcto'
                        })
                    }
                    else{
                        res.json({
                            status: 'Error',
                            message: 'Contraseña incorrecta',
                            id: userFind._id
                        });
                    }
                });
            }
    }
});

module.exports = router;
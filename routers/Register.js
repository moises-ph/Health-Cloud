const express = require('express');
const router = express.Router();
const {db, format} = require('../database/database');
const bcrypt = require('bcrypt');

router.get('/', (req, res)=>{
    res.render('register');
})

router.post('/', async (req, res, next)=>{
    const { userId, name, lastname, password, age, gender, email, userType, docType} = req.body;

    const password_crypt = await bcrypt.hash(password, 10);

    var validation = [false, false];

    let sql = "INSERT INTO registro(R_num_documento, R_nombres, R_apellidos, R_edad, R_genero, R_email, R_contraseña, R_tipo_de_usuario, R_tipo_de_documento) values(?,?,?,?,?,?,?,?,?)";
    let query = format(sql, [userId, name, lastname, age, gender, email, password_crypt, userType, docType]);

    let sql2 = "INSERT INTO datos_usuario values (?,?,?,?,?,?,?,?,?,?)";
    let query2 = format(sql2, [userId, 0,'','','','',0,'','','2000/01/01'])

    let DB_request = await new Promise((resolve, reject)=>{
        db.getConnection((err, connection)=>{
            if(err) throw err;
            connection.query(query, (err,result)=>{
                if(err) throw err;
                validation[0] = true;
            });
            connection.query(query2, (err, result)=>{
                if(err) throw err;
                validation[1] = true;
                validation[0]&&validation[1]? res.json({status: 'ok', message: 'Usuario registrado'}): res.json({status: 'error', message: 'Error al registrar usuario'});
            })
        })
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const {db, format} = require('../database/database');
const bcrypt = require('bcrypt');

router.get('/', (req, res)=>{
    res.render('register');
})

router.post('/', async (req, res, next)=>{
    const { userId, name, lastname, password, age, gender, email, userType, docType } = req.body;

    console.log(password);
    const password_crypt = await bcrypt.hash(password, 20);

    var validation = [false, false];

    let sql = "INSERT INTO registro(R_num_documento, R_nombres, R_apellidos, R_edad, R_genero, R_email, R_contraseña, R_tipo_de_usuario, R_tipo_de_documento) values(?,?,?,?,?,?,?,?,?)";
    let query = format(sql, [userId, name, lastname, age, gender, email, password_crypt, userType, docType]);

    let sql2 = "INSERT INTO datos_usuario values (?,?,?,?,?,?,?,?,?,?)";
    let query2 = format(sql2, [userId, 0,'','','','',0,'','','2000/01/01'])
    
    let sql3 = "SELECT * FROM registro WHERE R_num_documento = ?";
    let query3 = format(sql3, [userId]);

    db.getConnection((err, connection)=>{
        if(err) throw err;
        connection.query(query3, (err, result)=>{
            if(err) throw err;
            if(result.length > 0){
                res.json({
                    status: 'error',
                    message: 'El usuario ya existe'
                })
            }
            else{
                connection.query(query, (err, result)=>{
                    if (err) throw err;
                    connection.query(query2, (err, result)=>{
                        if (err) throw err;
                        res.json({
                            status: 'ok',
                            message: 'Usuario registrado'
                        })
                    });
                })
            }
        })
    })
});

module.exports = router;
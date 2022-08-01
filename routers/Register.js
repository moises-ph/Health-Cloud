const express = require('express');
const router = express.Router();
const {db, format} = require('../database/database');
const bcrypt = require('bcrypt');

//Funciones

const consultar = (query) =>{
    return new Promise((resolve, reject)=>{
        db.getConnection((err, connection)=>{
            if (err) throw err;
            connection.query(query, (err, rows)=>{
                if (err) throw err;
                resolve(rows);
            });
        });
    });
}

const registrar = (query) =>{
    return new Promise((resolve, reject)=>{
        db.getConnection((err, connection)=>{
            if (err) throw err;
            connection.query(query, (err, rows)=>{
                if (err) throw err;
                resolve(true);
            });
        });
    });
}

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

    let exists = await consultar(query3).then(result=> result);
    if(exists === true){
        res.json({
            status: 'error',
            message: 'Usuario ya existe'
        })
    }
    else{
        validation[0] = await registrar(query).then(result=> result);
        validation[1] = await registrar(query2).then(result=> result);
        if(validation[0] && validation[1]){
            res.json({
                status: 'ok',
                message: 'Usuario registrado'
            })
        }
        else{
            res.json({
                status: 'error',
                message: 'Error al registrar usuario'
            })
        }
    }
});

module.exports = router;
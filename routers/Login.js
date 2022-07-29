const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const {db, format} = require('../database/database');

router.get('/',(req, res)=>{
    res.render('login');
});

router.post('/', (req, res)=>{
    const { user_id, password } = req.body;
    let sql = 'SELECT * FROM registro WHERE R_num_documento = ?';
    let query = format(sql, [user_id]);
    db.getConnection((err, connection)=>{
        if (err) throw err;
        connection.query(query, (err, rows)=>{
            if (err) throw err;
            if (rows.length > 0){
                bcrypt.compare(password, rows[0].R_contraseña, (err, result)=>{
                    if(err) throw err;
                    console.log(rows);
                    if (result){
                        req.session.user = rows[0].R_num_documento;
                        res.json({
                            status: 'ok',
                            user: rows[0].R_num_documento,
                            message: 'Login correcto'
                        })
                    }
                    else{
                        res.json({
                            status: 'error',
                            message: 'Contraseña incorrecta'
                        })
                    }
                })
            }
        });
    });
});

module.exports = router;
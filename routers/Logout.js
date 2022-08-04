const express = require('express');
const router = express.Router();

router.get('/:id', async(req, res)=>{
  const id = req.params.id;
  if(req.session.user === id){
    req.session.logged = false;
    req.session.destroy();
    res.json({
      status: 'ok',
      message: 'Logout correcto'
    })
  }
});

module.exports = router;
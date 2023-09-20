const express= require('express');
const routes= express.Router();

routes.use('/',(req, res, next) =>{
    res.send(`<h1>HELLO FROM ANDY</h1>`);
})

module.exports=routes;
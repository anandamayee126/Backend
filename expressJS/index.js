const express = require('express');
const app= express();
const port= 5000;

const admin_routes= require('./routes/admin');
app.use(('/admin'),admin_routes);

const user_routes= require('./routes/user');
app.use(('/user'),user_routes);


app.listen(port,() =>{
  console.log(`listening on port ${port}`);
})
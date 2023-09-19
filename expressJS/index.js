const express = require('express');
const app= express();
const port=3000;
app.use((req, res, next) =>{
    console.log('1st middleware');
    next();
})

app.use((req, res, next) =>{
    console.log('2nd middleware');
    res.send('<h1>Hello from Express</h1>')
})

app.listen(port,() =>{
  console.log(`listening on port ${port}`);
})
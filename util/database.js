const Sequelize = require('sequelize');


const sequelize = new Sequelize('node_complete','root','Jhumpu@234',{
    dialect:'mysql',
    host: 'localhost'
})
// const pool= mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node_complete',
//     password: 'Jhumpu@234'
// })

module.exports=sequelize;

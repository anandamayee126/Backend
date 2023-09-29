const Sequelize= require('sequelize');
const sequelize= require('../util/database');

const cart_item= sequelize.define('cart-item',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: Sequelize.INTEGER
});

module.exports= cart_item;
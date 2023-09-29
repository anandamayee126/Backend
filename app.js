const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const sequelize=require('./util/database');
const errorController = require('./controllers/error');


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const User= require('./models/user');
const Product= require('./models/product');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res,next) => {
    User.findById(1)
    .then((res)=>{
        req.res=res;
    })
    .catch(err => {
        console.log(err);
    });
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User,{constraints: true, onDelete:'CASCADE' });
User.hasMany(Product);

sequelize.sync().then((res)=>{
    //console.log(res);
    return User.findById(1);
}).then((user)=>{
    if(!user){
        return User.create({name:'Andy',email:'candy@gmail.com'});
    }
    return user;
}).then(user=>{
    console.log(user);
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
})

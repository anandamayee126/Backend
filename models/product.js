const db= require('../util/database');
module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.id= Math.random,
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

// module.exports=origin,(req,res)=>{
  
// }
  save() {
    return(db.execute('INSERT INTO products (title,price,description,imageUrl) VALUES(?,?,?,?)'[this.title,this.price,this.description,this.imageUrl]));
  }

  static fetchAll() {
    return(db.execute('SELECT * FROM products'));

    
  }

  static findById(id)
  {
    return (db.execute('SELECT * FROM products WHERE id= ?'[id]));
  }

 static deleteById(id){
  return (db.execute('DELETE FROM products WHERE id= ?'[id]));
 }
};

// In memory data base


const products = [
   {
     id: 1,
    Brand : 'Apple',
    Model : 'Iphone 13',
    Price : '60,ooo',
    Instoct : 'True',
    Discount : '5%',
 }, {
     id: 2,
    Brand : 'Samsung',
    Model : 'S24 Ultra',
    Price : '1,20,ooo',
    Instoct : 'False',
     Discount : '5%',
 }, {
     id: 3,
    Brand : 'One Plus',
    Model : '9RT',
    Price : '45,000',
    Instoct : 'True',
     Discount : '10%',
 }]

function getAll(req, res) {
     res.status(200);
     res.json(products);
    };


function getById(req, res){

   const id = +req.params.id;
   let product;

   for(let i = 0; i < products.length; i++){
      if(products[i].id === id){
         product == products[i];
      }
   
   }

  if(product){

   res.status(200);
   res.json(product);

}
else{
   res.status(404);
   res.send('not found');
}
}


    module.exports = {

       getAll,
       getById
    };

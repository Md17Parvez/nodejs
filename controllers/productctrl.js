// In memory data base


const products = [
   {
     id: 1,
    Brand : 'Apple',
    Model : 'Iphone 13',
    Price : '60,ooo',
    instoct : 'True',
    Discount : '5%',
 }, {
     id: 2,
    Brand : 'Samsung',
    Model : 'S24 Ultra',
    Price : '1,20,ooo',
    instoct : 'False',
     Discount : '5%',
 }, {
     id: 3,
    Brand : 'One Plus',
    Model : '9RT',
    Price : '45,000',
    instoct : 'True',
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
         product = products[i];
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

function remove(req, res){

   const id = +req.params.id;


   for(let i = 0; i < products.length; i++){

      if(products[i].id===id){
         products.splice(i, 1);
         break;
      }
   }

   res.status(204);  // 204:- no content
   res.send('Successfully Deleted');
}

function isValid(playload){
return playload.brand && playload.model && playload.Price;
}


function create(req, res){

   const playload = req.body;

   if(isValid(playload)){
   
   products.push(playload);

   res.status(201)   // created
   res.send('Successfully Created');
   }
   else{
      res.status(400); // bad request
      res.send('invalid playload');
   }

}

function update(req, res){
   const id = +req.params.id;
   const payload = req.body;

   if(isValid(playload)){
      res.status(400);
      res.send('invalid payload');
   }
   else{

   

   for(let i = 0; i < products.length; i++){

      if(products[i].id === id){
         products[i].brand = payload.brand;
         products[i].model = payload.model;
         products[i].price = payload.price;
         products[i].instock = payload.instock;


      }
   }


   res.status(204); // no content
   res.send();

}
}



    module.exports = {

       getAll,
       getById,
       remove,
       create, 
       update
    };

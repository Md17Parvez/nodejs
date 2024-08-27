const http = require('http');
const fs = require('fs');

// handlimg requests
const handler = (req, res) => {

   switch(req.url) {
    case'/' :
     const contents = fs.readFileSync('./index.html');
       res.write(contents);
       res.end();
       break;
   
    case'/authors' :
       res.write('Hello Authors');
       res.end();
       break;

    case'/books' :
       res.write('List of books');
       res.end();
       break;

    case'/products' :
     
      const products = [
        {
         Brand : 'Apple',
         Model : 'Iphone 13',
         Price : '60,ooo',
         Instoct : 'True',
         Discount : '5%',
      }, {
         Brand : 'Samsung',
         Model : 'S24 Ultra',
         Price : '1,20,ooo',
         Instoct : 'False',
         Discount : '5%',
      }, {
         Brand : 'One Plus',
         Model : '9RT',
         Price : '45,000',
         Instoct : 'True',
         Discount : '10%',
      }];


      // Serialization and Deserialization
       res.write(JSON.stringify(products));
       res.end();
       break;

    default :
      res.write('Not found');
      res.end();
      break;


   }



}
const server = http.createServer(handler);

// runs on port 4000
const port = 4000;


server.listen(port, () => console.log('server is running on port' , port));





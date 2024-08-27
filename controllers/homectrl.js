class Homectrl{
    root(req, res){
          res.status(404);
          res.send('Hello Express  JS ')

}
    health(req, res){

      res.status(200);
       res.json({ status: 'UP'});

}
}

module.exports = new Homectrl();



//function root(req, res){
 //   res.status(404);
 //   res.send('Hello Express  JS ')
//};

//function health(req, res){

 //   res.status(200);
 //   res.json({ status: 'UP'});
// };

 //module.exports ={

 //   root,
//health
//}
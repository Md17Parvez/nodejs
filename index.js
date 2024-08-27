// execution= index.js => homeRoutes => homectrl => svc => reposatory.

const express = require('express');
const homeRoutes = require('./Routes/homeRoutes');
const productRoutes = require('./Routes/productRoutes');
const app = express();

app.use(express.json());

app.listen(3000, () => console.log('server is running on port'));

app.use('/', homeRoutes);
app.use('/', productRoutes);
      
/*
REST
  REST is a concept not a technology
  Representational State transfer

  Resources are accessed by URL

   CRUD:- Create, Read, Update and Delete

   5imp REST Principles
      1. Uniform Interface
      2. Client Server
      3. Cacheability
      4. Layered System
      5. Stateless


  HHTP Verbs:- GET(read), POST(Create), PUT(Update), DELETE(delete), PATCH(Partial Update).

  GTE:- Localhost3000/products (Safe operation)

*/



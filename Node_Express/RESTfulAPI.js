// RESTful API

// A rest api defines a set of function which devs can perform, request, and receive responses via http protocol (eg. get, post, put, delete)
// RESTful api means that the api follows the general rules and guidelines that everyone has agreed upon to maintain compatibility between different systems
// It's an architectural style and it's an approach to communications
// Uses GET to receive a resource, PUT to change the state or update anything, POST that creates a resource, DELETE to remove a resource
// RESTful API is a way to define our server that specifies what it can provide and how it can be accessed
// REST API's are "Stateless", meaning that calls can be made independently of one another and that each call contains all the data necessary to complete itself successfully 


const express = require('express');

const app = express(); // to run express we must do this


// app.use((req, res, next) => {  // Middleware, as the request is coming in, it will pass through Use() and then go to the stuff after. Will do something to the request to make it easier to work with, etc
//     console.log('<h1>HELLLOOOO<h1>')
//     next();
// })

app.use(express.urlencoded({extended: false}));     // middleware that takes whatever information we receive and then parses it
app.use(express.json());

app.get('/:id', (req, res) => {   
 //   console.log(req.query); // what we get when we do a GET query
 // req.body // using a middleware we can get the body and interpret it
// req.headers
    console.log(req.params) // this is a syntax where you use the parameters of the URL
    res.status(404).send("not found");
});

app.listen(3000); // tells you what port to put the app on... localhost 3000


// express checks the code line by line and does things sequentially (I think)

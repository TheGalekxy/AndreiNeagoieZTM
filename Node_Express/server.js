const express = require('express');

const app = express(); // to run express we must do this


// app.use((req, res, next) => {  // Middleware, as the request is coming in, it will pass through Use() and then go to the stuff after. Will do something to the request to make it easier to work with, etc
//     console.log('<h1>HELLLOOOO<h1>')
//     next();
// })

app.use(express.urlencoded({extended: false}));     // middleware that takes whatever information we receive and then parses it
app.use(express.json());

app.get('/', (req, res) => {        // request & response
   res.send("getting root")
});

app.get('/profile', (req, res) => {        // request & response
    res.send("getting profile")
 });
 

app.post('/profile', (req, res) => {        // request & response
    console.log(req.body)  
    res.send('Success')
});

app.listen(3000); // tells you what port to put the app on... localhost 3000


// express checks the code line by line and does things sequentially (I think)

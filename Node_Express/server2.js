const express = require('express');

const app = express(); 

app.use(express.static(__dirname + '/public')) // this is going to print out NODE_EXPRESS/public, __dirname is the directory name


app.listen(3000); // tells you what port to put the app on... localhost 3000


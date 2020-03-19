const express = require('express');
// const bcrypt = require('bcrypt-nodejs');
const bcrypt = require('bcryptjs');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors())

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            password: 'cookies',
            email: 'john@gmail.com',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            password: 'bananas',
            email: 'sally@gmail.com',
            entries: 0,
            joined: new Date()
        }
    ], 
    login: [
        {
            id: '987',
            hash: '',
            email: 'john@gmail.com'
        }
    ]
}

app.get('/', (req, res) =>{
    res.send(database.users);
})


app.post('/signin', (req, res) => {

        // Load hash from your password DB.
    bcrypt.compare("apples", "$2a$10$/ereAvN6o5COtuwzc3z8tevaEvYgCcTkfxADXEUTRYuEhFnctxaTy", function(err, res) {
        console.log('first guess', res)
        // res == true
    });
    bcrypt.compare("veggies", "$2a$10$/ereAvN6o5COtuwzc3z8tevaEvYgCcTkfxADXEUTRYuEhFnctxaTy", function(err, res) {
        console.log('second guess', res)
    });

    if (req.body.email === database.users[0].email && 
        req.body.password === database.users[0].password) {
            res.json(database.users[0]);
        } else {
            res.status(400).json('error logging in.')
        }
})

app.post('/register', (req, res) => {
    const { email, name, password } = req.body // grad the email, name, and password from the request body
    database.users.push({
        id: '125',
        name: name,
        email: email,
        entries: 0,
        joined: new Date()
    })
    res.json(database.users[database.users.length-1]);         // Always have to send a response back
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {               // if user.id is the same as the user we received from the params
            found = true;
            return res.json(user);
        } 
    })
    if (!found) {
        res.status(400).json('not found');
    }
}) // :id syntax means we can enter any id and grab that id through the request.id params

app.put('/image', (req, res) => {
    const { id } = req.body;        // grabbing the id from the requests body
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {               // if user.id is the same as the user we received from the params
            found = true;
            user.entries++;
            return res.json(user.entries);
        } 
    }) 
    if (!found) {
        res.status(400).json('not found');
    }
})





app.listen(3000, () => {
    console.log('app is running on port 3000')
})



/* 

Route / --> response = this is working
Route /signin ---> POST = success/fail
Route /register --> POST = user
Route /profile/:userId --> GET = user
Route /image --> PUT --> user

*/
// ASync Await

// Underneath the hood an asynch function is a function that returns promises
// The benefit of async await is that it makes code easier to read

// Two examples
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

async function playerStart() {
    const firstMove = await movePlayer(100, 'Left'); // Pause
    await movePlayer(400, 'Left'); // Pause
    await movePlayer(10, 'Right'); // Pause
    await movePlayer(330, 'Left'); // Pause
}

// Examples with Fetch()

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json)
    .then(console.log)

async function fetchUsers() {
    const response = await fetch('https://swapi.co/api/people/') // fetch the api and then put it in the response variable
    const data = await response.json(); // wait for the response variable then run it through json() and put that in the data variable
    console.log(data.results) // console.log the data variable
}

// Another example

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))


const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(response => response.json())
        ))
        console.log('users', users) // because we already destructed the users, posts, and albums
        console.log('posts', posts) // we can now just put them in the console.log like this
        console.log('albums', albums) 
    } catch (error) {
        console.log('ooops', error)
    }
}

// finally - allows us to do something finally after the promise is finished
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
}))
    .then(array => {
        throw Error;
        console.log('1', array[0])
        console.log('2', array[1])
        console.log('3', array[2])
        console.log('4', array[3])
    })
    .catch(err => console.log('ughhhh fix it!', err))
    .finally(() => console.log('extra')); // will be called regardless of whether .then() works or .catch() works


// for await of - allows us to loop over the await promises

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
            const response = await fetch(url);
            return response.json();
        }));
        console.log('users', users) // because we already destructed the users, posts, and albums
        console.log('posts', posts) // we can now just put them in the console.log like this
        console.log('albums', albums) 
    } catch (error) {
        console.log('ooops', error)
    }
}

const loopThroughUrls = url => {
    for (url of urls) {
        console.log(url)            // using the logic of a for of loop 
    }
}

const getData2 = async function() { // we can use a for await of loop
    const arrayOfPromises = urls.map(url => fetch(url)); // array of promises is iterable and able to be looped through with the for await loop
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}



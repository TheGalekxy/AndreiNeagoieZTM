// Promise - an object that may produce a single value some time in the future, either a resolved value or a reason that it's not resolved(rejected).
// In 1 of 3 posible states: fulfilled, rejected, pending
// Promises serve the same purpose as callbacks

const promise = new Promise((resolve, reject) => {              // promise has a 'resolve' and a 'reject'
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke');
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Is it me you are looking for?')
})

Promise.all([promise, promise2, promise3, promise4]) // Takes an array of promises and runs them. Waits until all the promises are resolved, therefore will take 5 seconds due to promise 4
    .then(values => {
        console.log(values);
    }) // values will be returned in the form of an array in the order that they were put into the method



promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch( () => console.log('errror!')) // catches any error that the promise might have
    .then(result3 => {
        console.log(result3 + '!')
    })
    
// Promises are great for asynchronous programing
// When you don't want javascript to block the running of your code, like in api calls, grabbing data from a database, or even optomizing an image; you use promise so the task happens in the background.
// when the promise gets resolved or rejected you'll get that response.

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

// extremely useful for things that are asynchronous such as api calls. Less interested in when things became available and more interested in reacting to the outcome.
// we are reacting to something that happens asynchronously 
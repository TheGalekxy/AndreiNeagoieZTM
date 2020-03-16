const fs = require('fs');   

fs.readFile('./hello.txt', (err, data) => {        // readFile reads file, first parameter is the first file
    if (err) {
        console.log('error');           // if there is an error, we display an error
    }
    console.log('Async', data.toString());              // if there is no error, and data then we display the data
})                                             // to string, if no param is entered is going to use the 'utf8' encoding
                                               // utf8 is a way of encoding the numbers so we can read them as letters

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString())


// Append

// fs.appendFile('./hello.txt', ' This is so cool!', err => {
//     if (err) {
//         console.log(err)
//     }
// })

// Write

// fs.writeFile('bye.txt', 'Sad to see you go', err => {
//     if (err) {
//         console.log(err)
//     }
// })

// Delete

fs.unlink('./bye.txt', err => {
   if (err) {
    console.log(err)
   }  
   console.log('Inception')
})
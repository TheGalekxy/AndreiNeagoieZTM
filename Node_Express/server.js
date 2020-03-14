const http = require('http');

const server = http.createServer((request, response) => {   // every time we try to connect we have a request and a response
    // console.log('headers', request.headers)
    console.log('method', request.method)
    console.log('url', request.url)

    const user = {
        name: 'John',
        hobby: 'Skating'
    }

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user))
})

server.listen(3000);
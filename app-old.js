var http = require('http');

http.createServer((request, response) => {

    let salida = {
        nombre: 'Danny Mauricio',
        edad: 45,
        url: request.url
    }


    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    response.write(JSON.stringify(salida));
    response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
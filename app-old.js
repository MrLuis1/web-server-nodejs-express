const http = require('http');

http.createServer((req, res) => {
    
    // res.writeHead(200, { 'Content-Type': 'application/json'})
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-type': 'application/csv'});

    res.write('hola mund')

    res.end();
})
.listen( 8080 );

console.log('escuchando el puerto', 8080)
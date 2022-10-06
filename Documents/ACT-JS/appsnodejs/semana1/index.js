/*const op = require('./ejercicio1')
op.suma(5,10)
op.resta(6,10)
op.multi(10,10)
op.divi(3,9)
op.pote(5,9)
op.radi(8,9)
console.log(op)*/


//1. Requerir modulo hhtp
const http=require('http')
//Funcion callback para manejar el servidor
function handleServer(req, res){
    res.writeHead(404,{"Content-type":'text-html'})
    res.write('<h1>Esta es la respuesta del servidor OK</h1>')
    res.end()
}
//2. Crear el server
const server=http.createServer(handleServer).listen(5000)

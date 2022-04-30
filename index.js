const path = require('path');  // PARA TRABAJAR CON DIRECTORIOS
const express = require('express');
const app = express();

// Modulo de Socket
const SocketIO = require('socket.io');
const io = SocketIO(server);  // Escuchamos la configuracion de Socket, necesita un servidor inicializado.

// websockets (Coneccion de un nuevo cliente)
io.on('connection', () => {
	console.log('new connection');
})

// settings
app.set('port', process.env.PORT || 3000) // CONFIGURAMOS EL PUERTO. 

// static files
app.use(express.static(path.join(__dirname, 'public')) ) // ENVIAR AL NAVEGADOR.

// Start the server
const server = app.listen(app.get('port'), () => {
	console.log('server on port', app.get('port')); // Mostrar en consola. 
})



const path = require('path');  // PARA TRABAJAR CON DIRECTORIOS
const express = require('express');
const app = express();

// settings
app.set('port', process.env.PORT || 3000) // CONFIGURAMOS EL PUERTO. 

// static files
app.use(express.static(path.join(__dirname, 'public')) ) // ENVIAR AL NAVEGADOR.

// Start the server
const server = app.listen(app.get('port'), () => {
	console.log('server on port', app.get('port')); // Mostrar en consola. 
})

// Modulo de Socket
const SocketIO = require('socket.io');
const io = SocketIO(server);  // Escuchamos la configuracion de Socket, necesita un servidor inicializado.

// websockets (Coneccion de un nuevo cliente) igual resivimos el socket del cliente. 
io.on('connection', (socket) => {
	console.log('new connection', socket.id);

	// Escuchar el evento socket y lo que vamos a recibir (data) que envia el objeto ('chat:message). 
	socket.on('chat:message', (data) => {
		// Enviar a todos incluyendome a mi. 
		// A todos los socket que estan conectados emitirles un evento. Recibir y reenviar.  
		io.sockets.emit('chat:message',  data);
	});
})







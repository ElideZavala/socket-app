const socket = io(); // EVITAMOS LOS EVENTOS AL SERVIDOR.

// DOM elements.
let username = document.getElementById('username');
let message = document.getElementById('message');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', function () {
	// Lo que deseas enviar al servidor. 
	socket.emit('chat:message', {
		username: username.value,
		message: message.value
	});
});

// Escuchar lo que el servidor esta emitiendo. 
socket.on('chat:message'); 
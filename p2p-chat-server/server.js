const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

// Store clients and their identifiers
const clients = new Map();

server.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('message', (message) => {
        const parsedMessage = JSON.parse(message);

        switch (parsedMessage.type) {
            case 'register':
                // Register client with a unique identifier
                clients.set(parsedMessage.id, socket);
                console.log(`Client registered with id: ${parsedMessage.id}`);
                break;
            case 'message':
                // Route message to the intended recipient
                const recipientSocket = clients.get(parsedMessage.to);
                if (recipientSocket && recipientSocket.readyState === WebSocket.OPEN) {
                    recipientSocket.send(JSON.stringify({
                        from: parsedMessage.from,
                        message: parsedMessage.message
                    }));
                } else {
                    console.log(`Recipient not found or not open: ${parsedMessage.to}`);
                }
                break;
            default:
                console.log('Unknown message type:', parsedMessage.type);
        }
    });

    socket.on('close', () => {
        console.log('Client disconnected');
        for (const [id, clientSocket] of clients.entries()) {
            if (clientSocket === socket) {
                clients.delete(id);
                console.log(`Client with id ${id} removed`);
                break;
            }
        }
    });
});

console.log('Server is running on ws://localhost:8080');


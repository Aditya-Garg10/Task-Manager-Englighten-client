import { io } from 'socket.io-client';

// Create a socket connection to the server
const socket = io('http://localhost:5000'); // Replace with your server URL

// Export socket for use in components
export default socket;
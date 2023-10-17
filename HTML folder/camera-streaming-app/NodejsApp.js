// JavaScript source code 

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//WebSocket For communication to HTML
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

app.get('/', (req, res) => {
    res.send('Hello, Node.js Server!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);  
});




// Function to capture video frames
const captureVideoFrame = () => {
    // This function should capture video frames and send them to connected clients.
};






wss.on('connection', (ws) => {
    // In here, add logic to send video frames to clients
    ws.send('Welcome to the WeMars Camera Site!');

    // Periodically capture and send video frames to clients
    const videoFrameInterval = 1000 / 30; // Adjust as needed (30 frames per second/check D435 native framerate)
    setInterval(() => {
        const videoFrameData = captureVideoFrame(); // Call the function to capture a frame
        if (ws.readyState === WebSocket.OPEN) {
            // Send the video frame data to the connected client
            ws.send(videoFrameData);
        }
    }, videoFrameInterval);

    //Use methods like this to handle incoming messages from the clients, maybe good for possible errors?
    ws.on('message', (message) => {
        // Handle incoming messages from the client
    });
});



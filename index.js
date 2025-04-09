const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server);

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
    
    socket.on("on-chat", (data) => {
        // Broadcast the message to all connected clients
        io.emit("user-chat", data);
    });
    
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

server.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});
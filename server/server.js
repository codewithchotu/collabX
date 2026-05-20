const express = require("express");
const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
const { Server } = require("socket.io");

dotenv.config();

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const roomRoutes = require("./routes/roomRoutes");
const chatRoutes = require("./routes/chatRoutes");
const fileRoutes = require("./routes/fileRoutes");

const app = express();

// Create HTTP Server
const server = http.createServer(app);

// Socket.io Setup
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Database Connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/files", fileRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("CollabX Server Running 🚀");
});

// Socket Events
io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  // Join Room
  socket.on("join-room", (roomId) => {
    socket.join(roomId);

    console.log(`User joined room: ${roomId}`);

    socket.to(roomId).emit("user-joined", socket.id);
  });

  // Chat Message
  socket.on("send-message", (data) => {
    io.to(data.roomId).emit("receive-message", data);
  });

  // Whiteboard Drawing
  socket.on("draw", (data) => {
    socket.broadcast.emit("draw", data);
  });

  // Video Signal (WebRTC)
  socket.on("signal", (data) => {
    socket.to(data.userToSignal).emit("signal", {
      signal: data.signal,
      callerId: socket.id,
    });
  });

  // Disconnect
  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});

// Server Port
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
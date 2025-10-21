const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/database');

dotenv.config();
connectDB();

const wasteRoutes = require('./routes/waste.routes');
const sensorRoutes = require('./routes/sensor.routes');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', wasteRoutes);
app.use('/api', sensorRoutes);

// WebSocket — live sensor updates
io.on('connection', (socket) => {
  console.log('🌐 WebSocket client connected');
  socket.on('sensor_update', (data) => io.emit('sensor_broadcast', data));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

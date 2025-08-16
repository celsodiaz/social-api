const express = require('express');
const cors = require('cors'); // 👈 importar cors
const app = express();

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

// 🔑 habilitar CORS
app.use(cors({
  origin: ["http://localhost:5173", "https://social-client.vercel.app"], // frontend local y desplegado
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('API funcionando correctamente 🚀');
});

module.exports = app;


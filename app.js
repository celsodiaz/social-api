const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json()); // Para recibir JSON en las peticiones

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('API funcionando correctamente 🚀');
});

module.exports = app;

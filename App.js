// Importar dependencias
const express = require('express'); 
const app = express();
const productRoutes = require('./routes/productRoutes'); // Rutas de productos
require('dotenv').config(); // Cargar variables de entorno
const db = require('./config/db'); // Conexión a la base de datos

// Middleware para manejar las solicitudes JSON
app.use(express.json());

// Rutas de la API de productos
app.use('/api', productRoutes);

// Iniciar servidor en el puerto configurado en .env o el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

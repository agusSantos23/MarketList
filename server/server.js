import express from 'express';
import sequelize from './config/db.js'; 
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', async(req, res) => {
  res.send('¡Servidor en funcionamiento!');

  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');

  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
    process.exit(1); 
  }
});



const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
};

startServer();

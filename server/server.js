import express from 'express';
import dotenv from 'dotenv';
import {connectDB, sequelize} from './config/db.js'
import authRoutes from './routes/auth.js'


dotenv.config();

const app = express();


app.use(express.json());


app.use(authRoutes)



const startServer = async () => {

  try {
    await connectDB();
    await sequelize.sync({ alter: true })
    console.log("Base de datos sincronizada correctamente");
    

    app.listen(process.env.PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${process.env.PORT}`);   
    });
  } catch (error) {
    console.log("Error server:", error);
  }
};

startServer();

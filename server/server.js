import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import {connectDB} from './config/db.js'
import sequelize from './config/db.js'


import authRoutes from './routes/auth.Routes.js'
import marketRoutes from './routes/market.Routes.js'

dotenv.config();

const app = express();

app.use(cookieParser());

app.use(cors({
  origin: process.env.ORIGIN_CORS, 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json());

app.use(authRoutes)
app.use('/markets',marketRoutes)


const startServer = async () => {

  try {
    await connectDB();
    await sequelize.sync({ alter: false })
    console.log("Base de datos sincronizada correctamente");
    

    app.listen(process.env.PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${process.env.PORT}`);   
    });
  } catch (error) {
    console.log("Error server:", error);
  }
};

startServer();

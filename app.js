import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import studentRoutes from './route/studentroute.js';

dotenv.config();

const app = express();
const json = express.json();
app.use(json); // middleware

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("database connected"))
  .catch((e) => console.log("connection failed error:", e));

app.use('/api/students', studentRoutes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

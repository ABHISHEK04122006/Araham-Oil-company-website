import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/arham_oil_db';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Database Connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB successfully at:', MONGO_URI);
  })
  .catch((err) => {
    console.warn('MongoDB connection notice (will use in-memory fallback):', err.message);
  });

app.listen(PORT, () => {
  console.log(`Arham Oil MERN Backend API running at http://localhost:${PORT}`);
});

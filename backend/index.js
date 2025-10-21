import express from 'express';
import dotenv from 'dotenv';
import databaseConnection from './db.js';
import userRoute from './Routes/userRoute.js';
import BookRoute from './Routes/BookRoute.js';
import cors from 'cors';

dotenv.config();
const app = express();

const corsOptions = { 
  origin: '*', // TODO: Change this to your frontend's URL in production
  optionsSuccessStatus: 200
};

// --- Middleware ---
app.use(cors(corsOptions));
app.use(express.json()); // To parse JSON bodies

// --- Database Connection ---
databaseConnection();

// --- API Routes ---
// Must match the "source" path in vercel.json rewrites
app.use('/api/user', userRoute);
app.use('/api/books', BookRoute);

// --- Export the app for Vercel ---
app.get('/', (req, res) => {
  res.send({
    active : "True"
  })
})
export default app;
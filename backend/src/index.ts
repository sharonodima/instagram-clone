import authRoutes from "./routes/auth.routes";
import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();


const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '5000');
const MONGO_URI = process.env.MONGO_URI as string;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Health check (optional)
app.get('/', (_req: Request, res: Response) => {
  res.send('API is running...');
});

// Connect to MongoDB and start the server
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.use("/api/auth", authRoutes);
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
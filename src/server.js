import express from 'express';
import IndexRoutes from './routes/index.routes';
import TaskRoutes from './routes/task.routes';

const app = express();

// Middelwares
app.use(express.json());

app.use(IndexRoutes);
app.use('/api/task', TaskRoutes);

export default app;
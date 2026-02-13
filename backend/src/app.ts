import express from 'express';
import cors from 'cors';
import authRouter from './router/auth.routes.js';
import taskRouter from './router/task.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/tasks', taskRouter);


export default app;
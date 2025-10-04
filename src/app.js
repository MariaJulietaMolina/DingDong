import express from 'express';
import morgan from 'morgan';

import autRoutes from './routes/auth.routes.js'

const app = express();

app.use(morgan('dev'));

app.use('/api',autRoutes);

export default app;
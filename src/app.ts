import express from 'express';
import middleware from './middleware';
import routes from './routes';
import './config/env';

const app = express();

middleware(app);
app.use('/', routes);

export default app;

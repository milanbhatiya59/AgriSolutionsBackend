import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { CORS_ORIGIN } from './constants.js';

const app = express();

app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

//routes import
import webhookRouter from './routes/webhook.routes.js';
import soilcardRouter from './routes/soilcard.routes.js';
import farmRouter from './routes/farm.routes.js';

//routes declaration
app.use('/api/v1/webhooks', webhookRouter);
app.use('/api/v1/soilcard', soilcardRouter);
app.use('/api/v1/farm', farmRouter);

export { app };

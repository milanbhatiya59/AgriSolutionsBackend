import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();
const CORS_ORIGIN = '*';

// 🔐 Set CORS headers manually
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', CORS_ORIGIN);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// 🛡️ Handle preflight requests
app.options('*', (req, res) => {
  res.sendStatus(200);
});

// 📦 Middlewares
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

// 📁 Routes import
import webhookRouter from './routes/webhook.routes.js';
import soilcardRouter from './routes/soilcard.routes.js';
import farmRouter from './routes/farm.routes.js';
import warningRouter from './routes/warning.routes.js';
import notificationRouter from './routes/notification.routes.js';
import pestAndDiseaseDetectionRouter from './routes/pestanddiseasedetection.routes.js';
import communityRouter from './routes/community.routes.js';
import userRouter from './routes/user.routes.js';

// 🔗 Routes declaration
app.use('/api/v1/webhooks', webhookRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/soilcard', soilcardRouter);
app.use('/api/v1/farm', farmRouter);
app.use('/api/v1/warning', warningRouter);
app.use('/api/v1/notification', notificationRouter);
app.use('/api/v1/pestanddiseasedetection', pestAndDiseaseDetectionRouter);
app.use('/api/v1/community', communityRouter);

export { app };

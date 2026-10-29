import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.json({
    service: process.env.SERVICE_NAME ?? '${{ values.name }}',
    description: '${{ values.description }}',
  });
});

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;

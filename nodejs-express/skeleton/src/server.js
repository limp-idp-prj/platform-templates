import app from './app.js';

const port = Number(process.env.PORT ?? 8080);
const server = app.listen(port, () => {
  console.log(`listening on ${port}`);
});

process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});

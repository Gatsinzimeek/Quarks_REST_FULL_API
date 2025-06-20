import express from 'express';
import router from './Routes/userRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', router);


app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `The route ${req.originalUrl} does not exist on this server.`,
  });
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

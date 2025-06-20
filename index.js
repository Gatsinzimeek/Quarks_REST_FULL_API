import express from 'express';
import router from './Routes/userRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

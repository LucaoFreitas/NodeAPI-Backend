import express from 'express';
import router from './router.js';

const app = express();

// para usar o router
app.use(express.json());
app.use(router);

export default app;

import 'dotenv/config';
import app from './app.js';

const PORT = process.env.PORT || 3333;

// Inicia o servidor na porta 3333
app.listen(3333, () => console.log(`server rodando na porta ${PORT}`));

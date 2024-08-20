import express from 'express';
import createDataBase from '../script/createDataBase.js';
import router from './routes/index.js';
import filmRoutes from './models/filmRoutes.js';
import userRoutes from './models/userRoutes.js';
const PORT = 3000;


const app = express();

app.use(express.json());

app.use(router);
app.use('/api/films', filmRoutes);
app.use('/api/users', userRoutes);

async function findAvailablePort(port) {
  return new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      server.close(() => resolve(port)); // Porta disponível
    });
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(findAvailablePort(port + 1)); // Tenta a próxima porta
      } else {
        reject(err);
      }
    });
  });
}

findAvailablePort(PORT)
  .then((availablePort) => {
    app.listen(availablePort, () => {
      console.log(`Servidor rodando na porta ${availablePort}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao tentar encontrar uma porta disponível:', err);
  });

createDataBase();
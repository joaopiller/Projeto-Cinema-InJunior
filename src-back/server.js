import express from 'express';
import createDataBase from '../script/createDataBase.js';
import createBackup from '../script/createBackup.js';
import router from './routes/index.js';
const PORT = 3000;

const app = express();

app.use(express.json());

app.use(router);

async function startServer() {
  try {
    // Cria e sincroniza o banco de dados
    await createDataBase();
    
    // Cria o backup do banco de dados
    await createBackup();

    // Inicia o servidor
    const availablePort = await findAvailablePort(PORT);
    app.listen(availablePort, () => {
      console.log(`Servidor rodando na porta ${availablePort}`);
    });
  } catch (error) {
    console.error('Erro ao criar o banco de dados, backup ou iniciar o servidor:', error);
  }
}

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

startServer();

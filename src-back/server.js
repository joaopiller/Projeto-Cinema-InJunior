import express from 'express';
import createDataBase from '../script/createDataBase.js';
import createFilme from './controllers/filmeController.js';
import createSecao from './controllers/secaoController.js';

const app = express();

app.use(express.json());

app.post('/filmes',(req,res)=>createFilme(req,res))

app.post('/filmes/:id/secoes',(req,res)=>createSecao(req,res))

app.listen(5173, () => {
    console.log("O servidor está rodando");
});

createDataBase();

import express from 'express';
import createDataBase from '../script/createDataBase.js';
import router from './routes/index';

const app = express();

app.use(express.json());

app.use(router);

app.listen(5173, () => {
    console.log("O servidor está rodando");
});

createDataBase();

import express from 'express';
import createDataBase from '../script/createDataBase.js';

const app = express();

app.use(express.json());

app.listen(5173, () => {
    console.log("O servidor está rodando");
});

createDataBase();

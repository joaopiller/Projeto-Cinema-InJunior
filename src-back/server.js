import express from 'express';
import createDataBase from '../script/createDataBase.js';
import filmRoutes from './models/filmRoutes.js';
import userRoutes from './models/userRoutes.js';


const app = express();

app.use(express.json());

app.use('/api/films', filmRoutes);
app.use('/api/users', userRoutes);

app.listen(5173, () => {
    console.log("O servidor está rodando na porta 5173");
});

createDataBase();
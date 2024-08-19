import express from 'express';

const secoesRoutes = express.Router();

// Inclusão dos middlewares
//import checkSecoesExists from "../middlewares/checkSecoesExistsMiddleware.js"
//import findSecoes from "../middlewares/findFilmMiddleware"

// Inclusão dos Controllers
import { CreateSecoes } from "../controllers/secoesController.js";

// Criar filme
secoesRoutes.post('/', (req, res)=> CreateSecoes(req, res));

// Deletar usuário
//secoesRoutes.delete('/:id', (req, res)=> secoesController.deleteSecoes(req, res))

export default secoesRoutes;
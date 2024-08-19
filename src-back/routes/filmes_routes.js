import express from 'express';

const filmRoutes = express.Router();

// Inclusão dos middlewares
import { checkFilmExists } from '../middlewares/checkFilmExistsMiddleware.js';

import findFilm from "../middlewares/findFilmByIdMiddleware.js"

// Inclusão dos Controllers
import {CreateFilm, findFilmByClassification, findFilmByGenre, deleteFilm} from "../controllers/filmController.js";

// Criar filme
filmRoutes.post('/', checkFilmExists, (req, res)=> CreateFilm(req, res));

// listar(filtrando por classificação)
filmRoutes.get('/genero', (req, res)=> findFilmByGenre(req, res));

// listar(filtrando por generero)
filmRoutes.get('/classificacao', (req, res)=> findFilmByClassification(req, res));

// Deletar usuário
filmRoutes.delete('/:id', findFilm, (req, res)=> deleteFilm(req, res))

export default filmRoutes;
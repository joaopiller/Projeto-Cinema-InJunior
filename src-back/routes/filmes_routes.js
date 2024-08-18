import express from 'express';

const filmRoutes = express.Router();

// Inclusão dos middlewares
import checkFilmExists from "../middlewares/checkFilmExistsMiddleware.js"
import findFilm from "../middlewares/findFilmMiddleware"

// Inclusão dos Controllers
import filmController from "../controllers/filmController";

// Criar filme
filmRoutes.post('/', checkFilmExists, (req, res)=> filmController.CreateFilm(req, res));

// listar(filtrando por classificação)
filmRoutes.get('/', (req, res)=> filmController.findFilmByClassification(req, res));

// listar(filtrando por generero)
filmRoutes.get('/', (req, res)=> filmController.findFilmByGenre(req, res));

// Deletar usuário
filmRoutes.delete('/:id', findUser, (req, res)=> filmController.deleteFilm(req, res))

export default filmRoutes;
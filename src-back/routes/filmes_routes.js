import express from 'express';

const filmRoutes = express.Router();

// Inclusão dos middlewares
import checkFilmExists from "../middlewares/checkFilmExistsMiddleware.js"

// Inclusão dos Controllers
import CreateFilm from "../controllers/filmController";

// Criar filme
filmRoutes.post('/', checkFilmExists, (req, res)=> CreateFilm(req, res))

export default filmRoutes;
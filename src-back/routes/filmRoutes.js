import express from 'express';
import {
    getAllFilms,
    createFilm,
    updateFilm,
    deleteFilm
} from '../controllers/filmController.js';

const router = express.Router();

// Listar todos os filmes
router.get('/', getAllFilms);

// Criar um novo filme
router.post('/', createFilm);

// Atualizar um filme existente
router.put('/:id', updateFilm);

// Excluir um filme existente
router.delete('/:id', deleteFilm);

export default router;

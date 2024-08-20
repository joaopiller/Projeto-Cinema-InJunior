import { Filmes } from '../models/allModels.js';

// Listar todos os filmes
export const getAllFilms = async (req, res) => {
    try {
        const films = await Filmes.findAll();
        res.json(films);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar filmes', error });
    }
};

// Criar um novo filme
export const createFilm = async (req, res) => {
    try {
        const { title, Url, sinopse, genero, classificacao, diretor } = req.body;
        const newFilm = await Filmes.create({ title, Url, sinopse, genero, classificacao, diretor });
        res.status(201).json(newFilm);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar filme', error });
    }
};

// Atualizar um filme existente
export const updateFilm = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, Url, sinopse, genero, classificacao, diretor } = req.body;

        const film = await Filmes.findByPk(id);
        if (!film) {
            return res.status(404).json({ message: 'Filme não encontrado' });
        }

        await film.update({ title, Url, sinopse, genero, classificacao, diretor });
        res.json(film);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar filme', error });
    }
};


export const deleteFilm = async (req, res) => {
    try {
        const { id } = req.params;
        const film = await Filmes.findByPk(id);
        if (!film) {
            return res.status(404).json({ message: 'Filme não encontrado' });
        }

        await film.destroy();
        res.json({ message: 'Filme excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir filme', error });
    }
};

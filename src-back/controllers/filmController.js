import { Filmes } from "../models/allModels";

// Criar um filme 
async function CreateFilm(request, response) {
    try {
        const { title, Url, sinopse, genero, classificacao, diretor } = request.body;

        if (classificacao < 0 || classificacao < 5) {
            return response.status(400).json({error: "Classificacao errada"});
        }

        const film = await Filmes.create({
            title,
            Url,
            sinopse,
            genero,
            classificacao,
            diretor,
        });

        return request.status(201).json(film.toJSON());
    }
    catch (error) {
        return response.status(400).json({error: "Não possível criar filme!"});
    }
}

async function findFilmByClassification(request, response) {
    try {
        const { genero } = request.params;

        const films = await Filmes.findAll({
            where: {
                classificacao,
            },
        });

        return request.status(200).json(films.toJSON());
    } catch (error) {
        return request.status(500).json({ error: "Erro ao achar os filmes!"});
    }
}

async function findFilmByGenre(request, response) {
    try {
        const { genero } = request.params;

        const films = await Filmes.findAll({
            where: {
                genero,
            },
        });

        return request.status(200).json(films.toJSON());
    } catch (error) {
        return request.status(500).json({ error: "Erro ao achar os filmes!"});
    }
}



export default {
    CreateFilm,
    findFilmByClassification,
    findFilmByGenre, 
}
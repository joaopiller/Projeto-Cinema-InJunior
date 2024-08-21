import { Filmes } from "../models/allModels.js";
import { Op } from 'sequelize'

// Listar todos os filmes
async function getAllFilms(req, res){
    try{
        const films = await Filmes.findAll();
        res.status(200).json(films);
    }catch(error){
        console.error("an error occured",error)
        res.status(404).json({error:"not found all flilms"})
    }
}

async function CreateFilm(request, response) {
    try {
        const { title, Url, sinopse, genero, classificacao, diretor } = request.body;

        if (classificacao < 0 || classificacao > 5) {
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

        return response.status(201).json(film.toJSON());
    }
    catch (error) {
        console.error("Um erro aconteceu!", error)
        return response.status(400).json({error: "Não possível criar filme!"});
    }
}

async function findFilmByClassification(request, response) {
    try {
        let { classificacao } = request.body;
        classificacao = parseInt(classificacao);

        if (isNaN(classificacao) || classificacao < 0 || classificacao > 5) {
            return response.status(400).json({ error: "Classificação não fornecida!" });
        }

        const films = await Filmes.findAll({
            where: {
                classificacao: classificacao,
            },
        });

        return response.status(200).json(films);
    } catch (error) {
        console.error("Um erro aconteceu!", error);
        return response.status(500).json({ error: "Erro ao achar os filmes!"});
    }
}

async function findFilmByGenre(request, response) {
    try {
        const { genero } = request.body;

        if (!genero) {
            return response.status(400).json({ error: "Gênero não fornecida!" });
        }

        const films = await Filmes.findAll({
            where: {
                genero: {
                    [Op.like]: `%${genero}%`
                }
            }
        });
        return response.status(200).json(films);

    } catch(error) {
        console.error("Um erro aconteceu!", error)
        return response.status(500).json({ error: "Erro ao achar os filmes!"});
    }
}

async function deleteFilm(request, response) {
    try {
        const film = request.film;

        if (!film) {
            return response.status(404).json({ error: "Filme não encontrado!" });
        }

        await film.destroy();

        return response.status(204).send();
    } catch(error) {
        console.error("Um erro aconteceu!", error)
        return response.status(500).json({ error: "Erro ao deletar o filme!" })
    }
}

async function getFilm(request,response) {
    try{
        const film = request.film
        return response.status(200).json(film)

    }catch(error){
        console.error("um erro aconteceu!", error)
        return response.status(500).json({error: "erro ao encontrar o filme"})
    }
}

async function updateFilmAll(request,response) {
    try{
        const film = request.film
        const {title,Url,sinopse,genero,classificacao,diretor} = request.body
        const updatefilm = await film.update({
            title:title,
            Url:Url,
            sinopse:sinopse,
            genero:genero,
            classificacao:classificacao,
            diretor:diretor
        })
        return response.status(202).json(updatefilm)
    }catch(error){
        console.error("um erro aconteceu!", error)
        return response.status(500).json({error: "erro ao encontrar o filme"})
    }
}

export {
    CreateFilm,
    findFilmByClassification,
    findFilmByGenre, 
    deleteFilm,
    getAllFilms,
    updateFilmAll,
    getFilm
}
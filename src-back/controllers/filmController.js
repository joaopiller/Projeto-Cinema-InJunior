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

export default CreateFilm
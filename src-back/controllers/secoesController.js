import { Filmes } from "../models/allModels.js";

// Criar um filme 
async function CreateSecoes(request, response) {
    try {
        const { horario, cidade, bairro, tipo} = request.body;

        const film = await Filmes.create({
            horario,
            cidade,
            bairro,
            tipo,
        });

        return response.status(201).json(film.toJSON());
    }
    catch (error) {
        console.error("Um erro aconteceu!", error)
        return response.status(400).json({error: "Não possível criar filme!"});
    }
}

export {
    CreateSecoes
}
import { response } from "express";
import filmControllrt from "../controllers/filmController"
import { Filmes } from "../models/allModels"

async function checkFilmExists(request, response, next) {
    try {
        const { title } = request.body;

        const film = await Filmes.findOne({
            where: {
                title,
            },
        });

        if (film) {
            return response.status(400).json({error: "O filme já existe!"});
        }

        return next()
    }
    catch(error) {
        return response.status(500).json({ error: "Erro ao checar se o filme existe!" })
    }
}

export default checkFilmExists
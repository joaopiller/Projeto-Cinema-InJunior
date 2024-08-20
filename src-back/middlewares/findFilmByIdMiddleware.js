import { Filmes } from "../models/allModels.js";

async function findFilmById(request, response, next) {
    try {
        const { id } = request.params;
        const film = await Filmes.findByPk(id);

        if (!film) {
            return response.status(404).json({ error: "Filme não encontrado!" });
        }

        request.film = film;
        next();
    } catch (error) {
        console.error("Um erro aconteceu ao buscar o filme!", error);
        return response.status(500).json({ error: "Erro ao buscar o filme!" });
    }
}

export default findFilmById;
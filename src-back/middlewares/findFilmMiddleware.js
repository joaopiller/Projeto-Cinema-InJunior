import { Filmes } from "../models/allModels";

async function findFilm(req, res, next) {
    try {
        const { id } = req.params;

        const film = await Filmes.findByPk(id);

        if (!film) {
            return res.status(404).json({error: "Filme não foi achado!"});
        }

        req.film = film;

        return next();
    } catch (error) {
        return res.status(500).json({ error: "Erro ao achar o usuário!"});
    }
}

export default findFilm;
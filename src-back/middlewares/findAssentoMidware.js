import { Assentos } from "../models/allModels.js";

async function findAssento(req,res,next) {
    try {
        const { secaoId, assentoId } = req.params;
        const assento = await Assentos.findOne({
            where: {
                secaoId: secaoId,
                id: assentoId
            }
        });
        if (!assento) {
            return res.status(404).json({ error: "Assento not found" });
        }
        req.assento = assento
        return next()

    } catch (error) {
        console.error("houve um erro", error);
        return res.status(500).json({ error: "erro ao tentar fazer a requisicao" });
    }
}

export default findAssento;
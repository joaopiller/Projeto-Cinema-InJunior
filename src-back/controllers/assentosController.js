import { Assentos } from "../models/allModels.js";

async function getAssento(req, res) {
    try {
        const assento = req.assento
        return res.status(200).json(assento);
    } catch (error) {
        console.error("houve um erro", error);
        return res.status(500).json({ error: "erro ao tentar fazer a requisicao" });
    }
}



export {
    getAssento,
    updateAssento
};

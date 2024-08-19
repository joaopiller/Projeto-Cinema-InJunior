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

async function updateAssento(req, res) {
    try {
        const { Cpf, Nome } = req.body;
        const assento = req.assento;
        const updatedAssento = await assento.update({
            Cpf: Cpf,
            Nome: Nome,
            isOcuped: true
        });

        return res.status(201).json(updatedAssento);
    } catch (error) {
        console.error("houve um erro", error);
        return res.status(500).json({ error: "erro ao tentar fazer a requisicao" });
    }
}

export {
    getAssento,
    updateAssento
};

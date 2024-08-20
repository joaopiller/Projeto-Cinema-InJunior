import { Assentos } from "../models/allModels.js";

async function listAssentos(req,res) {
    try{
        const { secaoId:secaoId } = req.params
        const assentos = await Assentos.findAll({
            where:{
                secaoId:secaoId
            }
        })
        if(!assentos){
            return res.status(404).json({error:"assentos não encontrados"})
        }
        return res.status(200).json(assentos)

    }catch(error){
        console.error("houve um erro", error);
        return res.status(500).json({ error: "erro ao tentar fazer a requisicao" });
    }
}

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
    updateAssento,
    listAssentos
};

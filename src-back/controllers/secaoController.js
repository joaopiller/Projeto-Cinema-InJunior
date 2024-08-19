import { Secoes } from '../models/allModels.js';

async function createSecao(req,res) {
    try{
        const { horario,cidade,bairro,tipo} = req.body
        const {filmeId:filmeId} = req.params
        const objSecao = {
            horario:horario,
            cidade:cidade,
            bairro:bairro,
            tipo:tipo,
            filmeId: filmeId
        }
        const secao = await Secoes.create(objSecao)
        return res.status(200).json(secao)

    }catch(error){
        console.error('An error occurred:', error);
        return res.status(500).json({error:"error ao tentar criar seção"})
    }
}



export {
    createSecao,
    listSecoes,
    getSecao,
    listSecoesFilterByCidade,
    listSecoesFilterByBairro,
    listSecoesFilterByBairroAndCidade,
} 

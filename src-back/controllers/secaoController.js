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

async function listSecoes(req,res) {
    try{
        const {filmeId:filmeId} = req.params
        const secoes = await Secoes.findAll({
            where:{
                filmeId:filmeId
            }
        })
        if(!secoes){
            return res.status(404).json({error:"secao não encontrada"})
        }
        return res.status(200).json(secoes)
    }catch(error){
        console.error('An error occurred:', error);
        return res.status(500).json({error:"error get Secoes"})
    }
}

async function getSecao(req,res) {
    try{
        const secao = req.secao
        return res.status(200).json(secao)
    }catch(error){
        console.error("an error ocurred:", error)
        res.status(500).json({error:"error in get secao"})
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

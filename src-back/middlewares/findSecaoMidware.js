import { Secoes } from "../models/allModels.js";


async function findSecao(req,res,next) {
    try{
        const { filmeId,secaoId } = req.params
        const secao = await Secoes.findOne({where:{
            filmeId:filmeId,
            id:secaoId
        }})
        
        if(!secao){
            return res.status(404).json({error:"secao not found!"})
        }
        req.secao = secao
        return next()
    }catch(error){
        console.error("an error ocurred:", error)
        res.status(500).json({error:"error in get secao"})
    }
}

export default findSecao;
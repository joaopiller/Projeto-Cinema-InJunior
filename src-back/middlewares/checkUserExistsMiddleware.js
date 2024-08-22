import { Users } from "../models/allModels.js";
async function checkUserExist(req,res,next) {
    try{
        const 
        { 
            nome, 
            sobrenome, 
            aniversario, 
            username,
            email,
            senha
        } = req.body;
        const checkUsername = await Users.findOne({
            where:{
                username:username
            }
        })
        if(checkUsername){
            return res.status(400).json({erro:"O usuario já está em uso"})
        }

        const checkEmail = await Users.findOne({
            where:{
                email:email
            }
        })
        if(checkEmail){
            return res.status(400).json({erro:"O email já está em uso"})
        }
        req.usuario = { 
            nome, 
            sobrenome, 
            aniversario, 
            username,
            email,
            senha
        };
        return next()


    }catch(error){
        console.error("an error occured",error)
        return res.status(500).json({error:"ocorreu um problema na checagem de usuario"})
    }
}

export default checkUserExist
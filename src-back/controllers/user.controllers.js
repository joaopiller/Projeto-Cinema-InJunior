import { Users } from "../models/allModels";

// Criar um filme 

async function createUser(req, res) {
    try {
        const 
        { 
            id, 
            nome, 
            sobrenome, 
            aniversario, 
            username,
            email,
            senha
        } = request.body;


        const user = await Users.create({
            id, 
            nome, 
            sobrenome, 
            aniversario, 
            username,
            email,
            senha
        });

        return request.status(201).json(user);
    }
    catch (error) {
        return response.status(400).json({error: "Erro na criação do usuário."});
    }
}

export default createUser
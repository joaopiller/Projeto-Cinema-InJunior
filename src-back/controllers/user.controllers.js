import { Users } from "../models/allModels.js";
import { Op } from 'sequelize'

// Criar um filme 

async function createUser(req, res) {
    try {
        const 
        { 
            nome, 
            sobrenome, 
            aniversario, 
            username,
            email,
            senha
        } = req.body;


        const user = await Users.create({ 
            nome, 
            sobrenome, 
            aniversario, 
            username,
            email,
            senha
        });

        return res.status(201).json(user);
    }
    catch (error) {
        return res.status(400).json({error: "Erro na criação do usuário."});
    }
}

async function loginUser(req, res) {
    try {
        const { username, email, senha } = req.body; 

        if (!senha || (!username && !email)) {
            console.warn("Campos faltando: Nome de usuário ou e-mail e senha são necessários.");
            return res.status(400).json({ error: 'Nome de usuário ou e-mail e senha são necessários.' });
        }

        const user = await Users.findOne({
            where: {
                [Op.or]: [{ username }, { email }]
            }
        });
        
        if (!user) {
            console.warn("Usuário não encontrado:", { username, email });
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }


        if(senha != user.senha){
            return res.status(401).json({ error: 'Senha incorreta.' });
        }

        console.log("Login bem-sucedido para o usuário:", user.username);

        res.status(200).json({
            id: user.id,
            username: user.username,
            nome: user.nome,
            sobrenome: user.sobrenome,
        });
    } catch (error) {
        console.error("Erro no processo de login:", error);  // Log detalhado do erro
        res.status(500).json({ error: 'Erro ao processar a requisição.' });
    }
};




export{
    createUser,
    loginUser,
}
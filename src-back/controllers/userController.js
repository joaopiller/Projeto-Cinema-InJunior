import { Users } from '../models/allModels.js'; 
import bcrypt from 'bcrypt'; 



export const loginUser = async (req, res) => {
    try {
        const { username, email, senha } = req.query; 

        
        if (!senha || (!username && !email)) {
            return res.status(400).json({ error: 'Nome de usuário ou e-mail e senha são necessários.' });
        }


        const user = await Users.findOne({
            where: {
                [Op.or]: [{ username }, { email }]
            }
        });

        
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }


        const passwordMatch = await bcrypt.compare(senha, user.senha);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Senha incorreta.' });
        }



        res.status(200).json({
            id: user.id,
            username: user.username,
            nome: user.nome,
            sobrenome: user.sobrenome,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao processar a requisição.' });
    }
};

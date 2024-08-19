import { Filmes } from '../models/allModels.js';

async function createFilme(req,res){
    try{
        const { title, url, sinopse, genero, classificacao, diretor } = req.body
        const objFilme = {
        title:title,
        Url: url,
        sinopse: sinopse,
        genero: genero,
        classificacao: classificacao,
        diretor: diretor,
        }
        const filme = await Filmes.create(objFilme)
        return res.status(201).json(filme)

    }catch(error){
        console.error('An error occurred:', error);
        return res.status(400).json({error:"erro na tentativa de criar o Filme"})
    }    
}

export default createFilme;
import express from 'express';
const secaoRouter = express.Router();

//importando secao controllers
import {createSecao,getSecao,listSecoes,listSecoesFilterByBairro,listSecoesFilterByCidade,listSecoesFilterByBairroAndCidade} from '../controllers/secaoController.js';

//importando midlewares
import findSecao from '../middlewares/findSecaoMidware.js';

//criar secao
secaoRouter.post('/:filmeId',(req,res)=>createSecao(req,res));

//listar todas as secoes de um filme
secaoRouter.get('/:filmeId',(req,res)=>listSecoes(req,res));



export default secaoRouter
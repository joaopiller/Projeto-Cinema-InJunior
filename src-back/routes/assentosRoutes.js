import express from 'express';
const assentosRouter = express.Router();
import { getAssento, updateAssento } from '../controllers/assentosController.js';
import findAssento from '../middlewares/findAssentoMidware.js';

//get o assento especifico pelo id dele
assentosRouter.get('/:secaoId/:assentoId',findAssento,(req,res)=>getAssento(req,res))

//update o assento
assentosRouter.patch('/:secaoId/:assentoId',findAssento,(req,res)=>updateAssento(req,res))

export default assentosRouter;
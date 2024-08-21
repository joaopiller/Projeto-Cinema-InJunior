import express from 'express';

const userRoutes = express.Router();

// Inclusão dos middlewares
import checkUserExist from '../middlewares/checkUserExistsMiddleware.js';

// Inclusão dos Controllers
import { createUser, loginUser } from "../controllers/user.controllers.js"

// Criar filme
userRoutes.post('/',checkUserExist,(req,res)=>createUser(req,res));

//login User
userRoutes.get('/login', loginUser);

export default userRoutes;
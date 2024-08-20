import express from 'express';

const userRoutes = express.Router();

// Inclusão dos middlewares


// Inclusão dos Controllers
import { createUser, loginUser } from "../controllers/user.controllers.js"

// Criar filme
userRoutes.post('/', createUser);

//login User
userRoutes.get('/login', loginUser);

export default userRoutes;
import express from 'express';

const userRoutes = express.Router();

// Inclusão dos middlewares


// Inclusão dos Controllers
import createUser from "../controllers/user.controllers";

// Criar filme
filmRoutes.post('/', createUser);

export default filmRoutes;
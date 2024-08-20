import express from 'express';
import { loginUser } from '../controllers/userController.js';

const router = express.Router();


router.get('/login', loginUser);

export default router;

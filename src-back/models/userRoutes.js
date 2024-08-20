import express from 'express';
import { loginUser } from './userController.js';

const router = express.Router();


router.get('/login', loginUser);

export default router;

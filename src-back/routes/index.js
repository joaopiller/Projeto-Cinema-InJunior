import { Router } from 'express';
import filmRoutes from './filmes.routes.js';
import secaoRouter from './secao.routes.js';
import userRoutes from './user.routes.js';
import assentosRouter from './assentos.routes.js';


const router = Router();

router.use("/films", filmRoutes);
router.use("/secao", secaoRouter);
router.use("/user",userRoutes);
router.use("/assentos",assentosRouter)


export default router;
import { Router } from 'express';
import filmRoutes from './filmes_routes.js';
import secoesRoutes from './secoes_routes.js';

const router = Router();

router.use("/films", filmRoutes);
router.use("/secoes", secoesRoutes);

export default router;
import Router from 'express';
import filmRoutes from './filmes_routes';

const router = Router();

router.use("/films", filmRoutes);

export default router;
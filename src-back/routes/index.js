const Router = require('express').Router;
const filmRoutes = require('./filmes_routes');

const router = Router();

router.use("/films", filmRoutes);

export default router;
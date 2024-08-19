import express from 'express';
import userRoutes from "./user.routes";

const router = express();

router.use("/users", userRoutes);


export default router;
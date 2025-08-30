import express from 'express';

// Routes
import quizRoutes from './quiz/index.js';
import pingRoutes from './ping/index.js';

const router = express.Router();

router.use('/quiz', quizRoutes);
router.use('/ping', pingRoutes);

export default router;
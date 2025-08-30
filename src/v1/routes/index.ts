import express from 'express';

// Routes
import quizRoutes from '@routes/quiz/index.js';
import pingRoutes from '@routes/ping/index.js';

const router = express.Router();

router.use('/quiz', quizRoutes);
router.use('/ping', pingRoutes);

export default router;
import express from 'express';
import { generate } from "@controllers/quiz-controller.js"

const router = express.Router();

router.post('/generate', generate);

export default router;
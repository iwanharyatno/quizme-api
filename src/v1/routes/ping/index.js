import { ping } from "../../controllers/ping-controller.js";
import express from "express";

const router = express.Router();

router.get('/', ping);

export default router;
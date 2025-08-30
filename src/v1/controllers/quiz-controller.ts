import { generateQuestions } from "@utils/gemini.js";
import type { Request, Response } from "express";

export async function generate(req: Request, res: Response) {
    const { prompt } = req.body;
    
    const questionsJSON = await generateQuestions(prompt);

    if (!questionsJSON) {
        return res.send({
            success: false,
            message: "No response from model",
            result: null
        });
    }

    return res.send({
        success: true,
        message: "Success generating questions!",
        result: questionsJSON
    });
}
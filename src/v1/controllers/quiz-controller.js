import { generateQuestions } from "../utils/gemini.js";

export async function generate(req, res) {
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
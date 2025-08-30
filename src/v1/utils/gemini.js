import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateQuestions(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
            {
                parts: [
                    {
                        text: prompt
                    }
                ]
            }
        ],
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                "type": "OBJECT",
                "propertyOrdering": ["title", "questions"],
                "properties": {
                    "title": { "type": "string" },
                    "questions": {
                        "type": "ARRAY",
                        "items": {
                            "type": "OBJECT",
                            "propertyOrdering": ["question", "answers", "correct_answer_index"],
                            "properties": {
                                "question": { "type": "STRING" },
                                "answers": {
                                    "type": "ARRAY",
                                    "maxItems": 4,
                                    "items": {
                                        "type": "STRING"
                                    }
                                },
                                "correct_answer_index": {
                                    "type": "INTEGER"
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    const text = response.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) return undefined;

    try {
        const parsed = JSON.parse(text);
        return parsed;
    } catch (err) {
        console.error("Failed to parse Gemini response:", err);
        return undefined;
    }
}

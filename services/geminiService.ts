
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateNewQuest = async (skills: string[]) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate a new "career quest" for a developer with skills: ${skills.join(', ')}. 
    Return it as an RPG-style objective. Format as JSON.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          description: { type: Type.STRING },
          difficulty: { type: Type.STRING }
        },
        required: ["title", "description", "difficulty"]
      }
    }
  });

  try {
    return JSON.parse(response.text || '{}');
  } catch (e) {
    return {
      title: "BUG HUNTING IN THE VOID",
      description: "AN UNKNOWN ERROR OCCURRED. DESTROY ALL SYNTAX ERRORS IN THE SYSTEM.",
      difficulty: "UNKNOWN"
    };
  }
};

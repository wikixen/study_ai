import { GoogleGenAI } from "@google/genai";
import { Flashcard } from "./types";

const ai = new GoogleGenAI({});

interface Params {
  questionAmount: number;
  file: string;
}

export const CreateFlash = async ({ questionAmount, file }: Params): Promise<Flashcard[]> => {
  const prompt = `
    Make ${questionAmount} flashcard with ${file}:
    Show these as a JSON response without markdown formatting; The form of the JSON response should be 
    {
      "0": {
          "question": question,
          "answer": answer
      },
      "1": {
          "question": question,
          "answer": answer
      },...
    }
  `;
  
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return JSON.parse(response.text!) as Flashcard[];
}
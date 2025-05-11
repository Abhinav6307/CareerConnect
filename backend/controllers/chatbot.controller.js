import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const askChatbot = async (req, res) => {
  const { message } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" }); // ✅ correct model

    const result = await model.generateContent([message]); // ✅ Gemini needs array

    const response = result.response;
    const text = response.text();

    return res.json({ reply: text });
  } catch (error) {
    console.error("❌ Gemini Error:", error);
    return res.status(500).json({ error: "Failed to get response from Gemini." });
  }
};

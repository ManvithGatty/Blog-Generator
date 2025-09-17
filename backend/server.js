import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const app = express();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenerativeAI(GEMINI_API_KEY);

// Middlewares
app.use(cors({
  origin: "https://blog-generator-uqdk.vercel.app", // frontend URL
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

// POST - Blog generation
app.post("/blog", async function (req, res) {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ message: "Prompt required!" });
    }

    // Gemini 2.5 flash model
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(
      `
        Write a detailed, engaging 1000-word blog post on the topic: "${prompt}". 
        Output should be in proper Markdown format:
        - Use # for the main title, ## for subheadings
        - Separate paragraphs with blank lines
        - Use bullet points or numbered lists where appropriate
        - Use **bold** or *italics* where needed for emphasis
      `
    );

    const text = result.response.text();

    return res.json({
      blog: text,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to generate blog..." });
  }
});

// Server start
const PORT = 5000;
app.listen(PORT, function () {
  console.log(`Server running on PORT ${PORT}`);
});

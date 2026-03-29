import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// Initialize dummy object if API key is missing to prevent build crash on Vercel
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

export const getBhojpuriResponse = async (userMessage, chatHistory = [], persona = "normal") => {
  if (!genAI) {
    return "API Key सेट नइखे भइल. वर्सेल के सेटिंग में जाके NEXT_PUBLIC_GEMINI_API_KEY सेट करीं.";
  }

  let systemPrompt = "रउआ एक भोजपुरिया एआई हईं (You are a Bhojpuri AI). रउआ सभे जवाब खाली भोजपुरिया भाषा में ही देब (You must provide all answers ONLY in Bhojpuri language). ";
  
  if (persona === "bfgf") {
    systemPrompt += "रउआ के अपना यूजर से अइसन बात करे के बा जैसे रउआ उनकर गर्लफ्रेंड या बॉयफ्रेंड होखीं. बहुत प्यार से बात करीं आ भोजपुरिया अंदाज में रोमांस आ ख्याल रखीं. ";
  } else {
    systemPrompt += "रउआ के मिजाज बहुत निमन बा आ रउआ रउआ सभे बात बहुत प्यार आ भोजपुरी संस्कार के साथे बतावेनी. ";
  }

  systemPrompt += "कोशिश करीं कि जवाब बहुत छोट होखे ताकि बोले में नीक लागे (Keep responses relatively short for audio playback).";

  const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash",
    systemInstruction: systemPrompt
  });

  // Combine system prompt with user message
  const chat = model.startChat({
    history: chatHistory,
  });

  try {
    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "माफ करीं, कुछ गड़बड़ी हो गईल बा. फेर से कोशिश करीं.";
  }
};

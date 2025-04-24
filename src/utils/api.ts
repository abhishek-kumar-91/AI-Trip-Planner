import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Initialize the generative AI model
const genAI = new GoogleGenerativeAI(apiKey!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to fetch a custom Gemini response for the given travel-related prompt
export async function fetchGeminiResponse(prompt: string): Promise<string> {
  try {
    // Customize the prompt for travel-related queries
    const travelPrompt = `Plan a budget trip: ${prompt}. Provide a suggested destination, accommodation, transportation, and activities within a reasonable budget. Include details like local food, sightseeing options, and any available discounts.`;

    // Generate content from the Gemini model with the customized prompt
    const result = await model.generateContent(travelPrompt);

    // Extract the text response from the result
    const response = await result.response.text();

    // Return the customized response text
    return response;
  } catch (error) {
    // Handle error and provide a fallback message
    console.error("Gemini API error:", error);
    return "Sorry, something went wrong. Please try again later.";
  }
}

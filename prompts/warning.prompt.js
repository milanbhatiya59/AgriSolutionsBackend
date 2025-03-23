const warningPrompt = `Analyze the provided farm data and generate a concise warning for the farmer based on the following factors:

1. **Weather Warnings:** Identify any extreme weather events or climate risks based on the farm’s location (latitude, longitude). If weather data is unavailable, provide a general risk assessment for the region.
2. **Soil Health Warnings:** Identify any issues from the soil test results such as high/low pH, nutrient deficiencies, or imbalances that may affect crop growth.
3. **Crop Health Warnings:** Identify potential risks related to the farm’s current crop, including pest infestations, disease threats, or other environmental stressors.

### **Response Format (JSON)**
Your response should be a JSON object with the following structure:

\`\`\`json
{
  "warnings": {
    "weather": "Provide weather-related warnings based on location.",
    "soilHealth": "Highlight any soil test issues affecting crop growth.",
    "cropHealth": "Mention any crop-specific risks like pests or diseases."
  }
}
\`\`\`

- Ensure the response is **concise**, **actionable**, and **limited to warnings only**.
- If any relevant data is missing, provide warnings based on available information.
- Avoid additional analysis beyond warnings.

Provide only the JSON output as the response.`;

export { warningPrompt };

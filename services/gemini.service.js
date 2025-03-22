import axios from 'axios';
import { GEMINI_API_KEY } from '../constants.js';

const URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

const callGeminiAPIWithPrompt = async prompt => {
  try {
    const requestBody = {
      contents: [{ parts: [{ text: prompt }] }],
    };

    const response = await axios.post(GEMINI_API_URL, requestBody);

    const extractedText =
      response.data.candidates[0]?.content?.parts[0]?.text || '';

    return JSON.parse(extractedText.replace(/```json\n|\n```/g, '').trim());
  } catch (error) {
    console.error(
      'Error in generateTextFromPrompt:',
      error.response ? error.response.data : error.message
    );
    return null;
  }
};

const callGeminiAPIWithPromptAndImage = async (
  prompt,
  base64Data,
  mimeType
) => {
  try {
    const requestBody = {
      contents: [
        {
          parts: [
            { text: prompt },
            {
              inline_data: {
                mime_type: mimeType,
                data: base64Data,
              },
            },
          ],
        },
      ],
    };

    const response = await axios.post(URL, requestBody);

    let extractedText = response.data.candidates[0].content.parts[0].text;

    extractedText = extractedText.replace(/```json\n|\n```/g, '').trim();

    const jsonOutput = JSON.parse(extractedText);
    return jsonOutput;
  } catch (error) {
    console.error(
      'Error calling Gemini API:',
      error.response ? error.response.data : error.message
    );
    return null;
  }
};

export { callGeminiAPIWithPromptAndImage, callGeminiAPIWithPrompt };

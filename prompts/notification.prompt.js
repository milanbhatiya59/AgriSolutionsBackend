const notificationPrompt = `Analyze the provided farm data and generate a daily notification plan for the farmer. The notifications should align with the crop's lifecycle stage based on the **farm's creation date** (assumed to be the planting date).

### **Key Factors to Consider:**
1. **Farm Creation Date:** Use the provided **farm creation date** as the starting point to determine the **current day of the crop’s lifecycle**.
2. **Crop Lifecycle Stage:** Identify the current stage (e.g., germination, vegetative, flowering, harvesting) based on the number of days since the farm was created.
3. **Daily Farm Tasks:** Recommend essential tasks for today, including:
   - **Watering**: Determine irrigation needs based on soil moisture and weather conditions.
   - **Fertilization**: Specify type and amount per hectare based on the crop’s stage.
   - **Pest & Disease Control**: Suggest actions if risks are detected.
   - **Other Farming Activities**: Pruning, weeding, harvesting, etc.
4. **Weather Considerations:** Adjust recommendations based on forecasted weather (e.g., reduce irrigation if rain is expected).

### **Response Format (JSON)**
Your response should be structured as follows:

\`\`\`json
{
  "notifications": [
    {
      "date": "YYYY-MM-DD", 
      "taskType": "Type of task (e.g., Watering, Fertilizing, Pesticide, Harvesting)",
      "description": "Detailed explanation of what needs to be done.",
      "quantity": "Amount per hectare (if applicable)",
      "unit": "Unit of measurement (liters, kg, etc.)",
      "priority": "Low | Medium | High"
    }
  ]
}
\`\`\`

### **Guidelines**
- The **date should be calculated** based on the farm’s **creation date** to match the correct lifecycle stage.
- Ensure the notifications are **actionable, relevant, and concise**.
- Adapt recommendations based on **location, soil condition, crop type, and weather**.
- If any required data is missing, provide **general best-practice advice**.

Provide only the JSON output as the response.`;

export { notificationPrompt };

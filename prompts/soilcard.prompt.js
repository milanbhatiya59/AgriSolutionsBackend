const soilCardPrompt = `Please analyze the provided image of a Soil Health Card and extract the following information in a structured JSON format.

The extracted JSON should include:

{
  "Card_Header_Information": {
    "SOIL_HEALTH_CARD": "Present/Not Found",
    "DEPARTMENT_OF_AGRICULTURE": "Present/Not Found",
    "Year": "Year value or null",
    "SOIL_HEALTH_CARD_NO": "Value or null"
  },
  "Farmer_Location_Details": {
    "Farmer_Name": "Value or null",
    "Village": "Value or null",
    "Taluka": "Value or null",
    "District": "Value or null",
    "Account_No": "Value or null"
  },
  "Land_Soil_Details": {
    "Survey_No": "Value or null",
    "Area_Ha": "Value or null",
    "Soil_Type": "Value or null"
  },
  "Fertility_Class_Village": {
    "Nitrogen": "Value or null",
    "Phosphorus": "Value or null",
    "Potash": "Value or null"
  },
  "Individual_Soil_Analysis": [
    {
      "Sr": "Value",
      "Detail": "Value",
      "Results": "Value",
      "Interpretation": "Value"
    }
  ],
  "Fertilizer_Recommendations": [
    {
      "Season": "Value",
      "Crop": "Value",
      "N_kg_ha": "Value",
      "P_kg_ha": "Value",
      "K_kg_ha": "Value"
    }
  ],
  "Other_Relevant_Information": {
    "General_Recommendations": ["Organic Manure", "Biofertilizer", "Lime/Gypsum"],
    "Secondary_Micro_Nutrient_Recommendations": [
      {"Sl_No": 1, "Parameter": "Sulphur (S)"},
      {"Sl_No": 2, "Parameter": "Zinc (Zn)"},
      {"Sl_No": 3, "Parameter": "Boron (B)"},
      {"Sl_No": 4, "Parameter": "Iron (Fe)"},
      {"Sl_No": 5, "Parameter": "Manganese (Mn)"},
      {"Sl_No": 6, "Parameter": "Copper (Cu)"}
    ],
    "Red_Box_22": "Value or Not Found",
    "International_Year_of_Soils": "2015"
  }
}

Make sure the response is valid JSON without markdown formatting. If information is unclear or missing, set values as null.`;

export { soilCardPrompt };

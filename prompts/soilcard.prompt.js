const soilCardPrompt = `Please analyze the provided image of a Soil Health Card and extract the following information in a structured JSON format.

The extracted JSON should include:

{
  "soilHealthCard": {
    "soilHealthCardNo": "null | string",
    "nameOfFarmer": "null | string",
    "validityFrom": "null | string",
    "validityTo": "null | string"
  },
  "farmersDetails": {
    "name": "null | string",
    "address": "null | string",
    "village": "null | string",
    "subDistrict": "null | string",
    "district": "null | string",
    "PIN": "null | string",
  },
  "soilSampleDetails": {
    "soilSampleNumber": "null | string",
    "sampleCollectedOn": "null | string",
    "surveyNo": "null | string",
    "khasraNo_DagNo": "null | string",
    "farmSize": "null | string",
    "geoPositionLatitude": "null | string",
    "geoPositionLongitude": "null | string",
    "irrigatedRainfed": "null | string"
  },
  "soilTestResults": {
    "pH": "null | float",
    "EC": "null | float",
    "organicCarbon_OC": "null | float",
    "availableNitrogen_N": "null | float",
    "availablePhosphorus_P": "null | float",
    "availablePotassium_K": "null | float",
    "availableSulphur_S": "null | float",
    "availableZinc_Zn": "null | float",
    "availableBoron_B": "null | float",
    "availableIron_Fe": "null | float",
    "availableManganese_Mn": "null | float",
    "availableCopper_Cu": "null | float"
  },
  "secondaryMicroNutrientsRecommendations": {
    "sulphur_S": "null | string",
    "zinc_Zn": "null | string",
    "boron_B": "null | string",
    "iron_Fe": "null | string",
    "manganese_Mn": "null | string",
    "copper_Cu": "null | string"
  },
  "fertilizerRecommendations": {
    "crops": [
      {
        "cropVariety": "null | string",
        "referenceYield": "null | float",
        "fertilizerCombination1_NPK": "null | string",
        "fertilizerCombination2_NPK": "null | string"
      }
    ]
  }
}

Make sure the response is valid JSON without markdown formatting. If information is unclear or missing, set values as null.`;

export { soilCardPrompt };

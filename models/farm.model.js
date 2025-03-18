import mongoose from 'mongoose';

const farmSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    soilHealthCard: {
      soilHealthCardNo: { type: String, default: null },
      nameOfFarmer: { type: String, default: null },
      validityFrom: { type: String, default: null },
      validityTo: { type: String, default: null },
    },
    farmersDetails: {
      name: { type: String, default: null },
      address: { type: String, default: null },
      village: { type: String, default: null },
      subDistrict: { type: String, default: null },
      district: { type: String, default: null },
      PIN: { type: String, default: null },
    },
    soilSampleDetails: {
      soilSampleNumber: { type: String, default: null },
      sampleCollectedOn: { type: String, default: null },
      surveyNo: { type: String, default: null },
      khasraNo_DagNo: { type: String, default: null },
      farmSize: { type: String, default: null },
      geoPositionLatitude: { type: String, default: null },
      geoPositionLongitude: { type: String, default: null },
      irrigatedRainfed: { type: String, default: null },
    },
    soilTestResults: {
      pH: { type: Number, default: null },
      EC: { type: Number, default: null },
      organicCarbon_OC: { type: Number, default: null },
      availableNitrogen_N: { type: Number, default: null },
      availablePhosphorus_P: { type: Number, default: null },
      availablePotassium_K: { type: Number, default: null },
      availableSulphur_S: { type: Number, default: null },
      availableZinc_Zn: { type: Number, default: null },
      availableBoron_B: { type: Number, default: null },
      availableIron_Fe: { type: Number, default: null },
      availableManganese_Mn: { type: Number, default: null },
      availableCopper_Cu: { type: Number, default: null },
    },
    secondaryMicroNutrientsRecommendations: {
      sulphur_S: { type: String, default: null },
      zinc_Zn: { type: String, default: null },
      boron_B: { type: String, default: null },
      iron_Fe: { type: String, default: null },
      manganese_Mn: { type: String, default: null },
      copper_Cu: { type: String, default: null },
    },
    fertilizerRecommendations: {
      crops: [
        {
          cropVariety: { type: String, default: null },
          referenceYield: { type: Number, default: null },
          fertilizerCombination1_NPK: { type: String, default: null },
          fertilizerCombination2_NPK: { type: String, default: null },
        },
      ],
    },
  },
  { timestamps: true }
);

const Farm = mongoose.model('Farm', farmSchema);
export { Farm };

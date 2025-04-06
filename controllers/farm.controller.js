import { asyncHandler } from '../utils/asyncHandler.js';
import { Farm } from '../models/farm.model.js';
import { User } from '../models/user.model.js';
import { Notification } from '../models/notification.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { callGeminiAPIToGetText } from '../services/gemini.service.js';
import { notificationPrompt } from '../prompts/notification.prompt.js';

const createFarm = asyncHandler(async (req, res) => {
  const { ownerClerkId, ...farmData } = req.body;

  const user = await User.findOne({ clerkId: ownerClerkId });
  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  const farm = await Farm.create({ owner: user._id, ...farmData });

  user.farms.push(farm._id);
  await user.save();

  const farmDetails = {
    farmId: farm._id,
    creationDate: farm.createdAt,
    farmer: {
      name: farm.farmersDetails.name,
      address: farm.farmersDetails.address,
      village: farm.farmersDetails.village,
      subDistrict: farm.farmersDetails.subDistrict,
      district: farm.farmersDetails.district,
      PIN: farm.farmersDetails.PIN,
    },
    location: {
      latitude: farm.soilSampleDetails.geoPositionLatitude,
      longitude: farm.soilSampleDetails.geoPositionLongitude,
    },
    soilHealthCard: {
      cardNumber: farm.soilHealthCard.soilHealthCardNo,
      validityFrom: farm.soilHealthCard.validityFrom,
      validityTo: farm.soilHealthCard.validityTo,
    },
    soilSampleDetails: {
      sampleNumber: farm.soilSampleDetails.soilSampleNumber,
      surveyNo: farm.soilSampleDetails.surveyNo,
      farmSizeInHector: farm.soilSampleDetails.farmSizeInHector,
    },
    soilTestResults: farm.soilTestResults,
    cropType: farm.currentCrop,
    fertilizerNeeded: farm.fertilizerNeeded,
  };

  const geminiResponse = await callGeminiAPIToGetText(
    notificationPrompt,
    farmDetails
  );

  if (geminiResponse?.notifications?.length) {
    const notifications = geminiResponse.notifications.map(task => ({
      date: new Date(task.date),
      taskType: task.taskType,
      description: task.description,
      quantity: task.quantity || null,
      unit: task.unit || null,
      status: 'Pending',
    }));

    await Notification.create({
      farm: farm._id,
      tasks: notifications,
    });
  }

  res
    .status(201)
    .json(
      new ApiResponse(201, farm, 'Farm created successfully with notifications')
    );
});

const getFarmsByowner = asyncHandler(async (req, res) => {
  const { ownerClerkId } = req.body;

  const user = await User.findOne({ clerkId: ownerClerkId });
  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  const userId = user._id;

  const farms = await Farm.find({ owner: userId });
  res
    .status(200)
    .json(new ApiResponse(200, { user, farms }, 'Farms fetched successfully'));
});

const getFarmById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  if (!farm) {
    throw new ApiError(404, 'Farm not found');
  }
  res.status(200).json(new ApiResponse(200, farm, 'Farm fetched successfully'));
});

export { createFarm, getFarmsByowner, getFarmById };

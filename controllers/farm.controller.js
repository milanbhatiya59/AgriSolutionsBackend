import { asyncHandler } from '../utils/asyncHandler.js';
import { Farm } from '../models/farm.model.js';
import { User } from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

import asyncHandler from 'express-async-handler';
import { User } from '../models/user.model.js';
import { Farm } from '../models/farm.model.js';
import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';

const createFarm = asyncHandler(async (req, res) => {
  const { ownerClerkId, ...farmData } = req.body;

  const user = await User.findOne({ clerkId: ownerClerkId });
  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  const farm = await Farm.create({ owner: user._id, ...farmData });

  user.farms.push(farm._id);
  await user.save();

  res.status(201).json(new ApiResponse(201, farm, 'Farm created successfully'));
});

export { createFarm };

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

export { createFarm, getFarmsByowner };

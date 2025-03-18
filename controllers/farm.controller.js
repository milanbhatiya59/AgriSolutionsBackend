import { asyncHandler } from '../utils/asyncHandler.js';
import { Farm } from '../models/farm.model.js';
import { User } from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const createFarm = asyncHandler(async (req, res) => {
  const { ownerId, ...farmData } = req.body;

  const user = await User.findById(ownerId);
  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  const farm = await Farm.create({ ownerId, ...farmData });
  res.status(201).json(new ApiResponse(201, farm, 'Farm created successfully'));
});

const getFarmsByownerId = asyncHandler(async (req, res) => {
  const { ownerId } = req.params;
  const farms = await Farm.find({ ownerId: ownerId }).populate(
    'ownerId',
    'name email'
  );
  res
    .status(200)
    .json(new ApiResponse(200, farms, 'Farms fetched successfully'));
});

export { createFarm, getFarmsByownerId };

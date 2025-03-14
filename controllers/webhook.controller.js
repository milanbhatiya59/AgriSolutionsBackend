import { asyncHandler } from '../utils/asyncHandler.js';

const registerClerkUser = asyncHandler(async (req, res) => {
  const { body } = req;
  console.log(body);
  res.status(200).json({ status: 'success' });
});

export { registerClerkUser };

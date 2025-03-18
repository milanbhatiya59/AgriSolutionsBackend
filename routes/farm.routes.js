import { Router } from 'express';
import { createFarm } from '../controllers/farm.controller.js';
import { getFarmsByownerId } from '../controllers/farm.controller.js';

const router = Router();

router.route('/create').post(createFarm);
router.route('/get/:ownerId').get(getFarmsByownerId);

export default router;

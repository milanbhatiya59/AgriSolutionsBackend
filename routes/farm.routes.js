import { Router } from 'express';
import { createFarm } from '../controllers/farm.controller.js';
import { getFarmsByowner } from '../controllers/farm.controller.js';

const router = Router();

router.route('/create').post(createFarm);
router.route('/get').get(getFarmsByowner);

export default router;

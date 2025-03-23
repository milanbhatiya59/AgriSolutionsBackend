import { Router } from 'express';
import { getWarning } from '../controllers/warning.controller.js';

const router = Router();

router.route('/').post(getWarning);

export default router;

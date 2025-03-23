import { Router } from 'express';
import { getNotification } from '../controllers/notification.controller.js';

const router = Router();

router.route('/get/:id').get(getNotification);

export default router;

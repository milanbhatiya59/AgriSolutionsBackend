import { Router } from 'express';
import { registerClerkUser } from '../controllers/webhook.controller.js';

const router = Router();

router.route('/').post(registerClerkUser);

export default router;

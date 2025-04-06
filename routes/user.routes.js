import { Router } from 'express';
import { getUser } from '../controllers/user.controller.js';

const router = Router();

router.route('/:userClerkId').get(getUser);

export default router;

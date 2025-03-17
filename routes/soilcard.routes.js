import { Router } from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import { getSoilCardData } from '../controllers/soilcard.controller.js';

const router = Router();

router.route('/').post(upload.single('soilcard'), getSoilCardData);

export default router;

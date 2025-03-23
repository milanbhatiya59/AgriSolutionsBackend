import { Router } from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import { pestAndDiseaseDetection } from '../controllers/pestanddiseasedetection.controller.js';

const router = Router();

router.route('/').post(upload.single('image'), pestAndDiseaseDetection);

export default router;

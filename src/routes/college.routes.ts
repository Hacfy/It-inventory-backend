import { Router } from 'express';


import { verifyAdminToken } from '../middleware/auth.jwt';
import { createCollege } from '../controllers/college';


const router = Router();

router.post('/create-college',verifyAdminToken,createCollege);

export default router;

import express from 'express';
import { forgotPassword,me, loginStaff, resetPassword ,} from '../controllers/staff.controllers';
import { verifyStaffToken } from '../middleware/auth.jwt';


const router = express.Router();

router.post('/login',loginStaff);

router.get('/me', verifyStaffToken, me);


router.post('/forgot-password', forgotPassword);


router.post('/reset-password', resetPassword);

export default router;

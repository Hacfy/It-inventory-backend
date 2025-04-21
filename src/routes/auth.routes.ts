import express from 'express';
import {
  loginAdmin,
 me,
  forgotPassword,
  resetPassword,
 
} from '../controllers/authcontroller'
import {  verifyAdminToken} from '../middleware/auth.jwt'



const router = express.Router();


router.post('/login', loginAdmin);
router.get('/me',verifyAdminToken, me);

router.post('/forgot-password', forgotPassword);


router.post('/reset-password', resetPassword);

export default router;

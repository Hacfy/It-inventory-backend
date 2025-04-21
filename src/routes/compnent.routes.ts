import express from 'express';
import {  createComponent} from '../controllers/component.controlers'
import { verifyAdminToken } from '../middleware/auth.jwt';



const router = express.Router();


router.post('/create',verifyAdminToken,createComponent);


export default router;

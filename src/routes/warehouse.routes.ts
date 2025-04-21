import express from 'express' ;
import { createWarehouse } from '../controllers/warehouse';
import { verifyAdminToken } from '../middleware/auth.jwt';

const router = express.Router();
router.post('/create',verifyAdminToken ,  createWarehouse);

export default router;
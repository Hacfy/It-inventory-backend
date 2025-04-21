
import express from 'express';


import { createStaff, deleteStaff, getAllStaff, getStaffById } from '../controllers/createStaff.controllers';
import { verifyAdminToken } from '../middleware/auth.jwt';

const router = express.Router();

router.post('/create',verifyAdminToken,createStaff);
router.get("/all", getAllStaff);
router.get("/:id",getStaffById);
router.delete("/delete/:id", deleteStaff);

export default router;

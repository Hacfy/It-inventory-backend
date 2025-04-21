import express from 'express';
const router = express.Router();
import { getAllReports, getReportById } from '../controllers/reportadmin.controllers';
import { verifyAdminToken } from '../middleware/auth.jwt';

router.get("/all",verifyAdminToken, getAllReports);
router.get("/:id", verifyAdminToken , getReportById)
export default router;
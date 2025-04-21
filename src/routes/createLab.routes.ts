
import { Router } from "express";
import { verifyAdminToken } from "../middleware/auth.jwt";
import { createLab } from "../controllers/createlab.components";
const router = Router();
router.post("/create",verifyAdminToken, createLab)
export default router;
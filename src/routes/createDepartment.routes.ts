import express from "express";

import { createDepartment } from "../controllers/createDepratment";
import { verifyAdminToken } from "../middleware/auth.jwt";

const router = express.Router();

router.post("/create",verifyAdminToken  ,createDepartment)



export default router ; 

import { Router } from "express";
import {
  createHOD,
  assignDepartmentsToHod,
} from "../controllers/createHOD.controllers";
import { verifyAdminToken, verifyHODToken } from "../middleware/auth.jwt";
import { hodLogin, meHOD } from "../controllers/HodLogin.controllers";

const router = Router();

router.post("/create", verifyAdminToken, createHOD);
router.post("/:hodId/departments", verifyAdminToken, assignDepartmentsToHod);
router.post("/login", hodLogin);
router.get("/me", verifyHODToken, meHOD);

export default router;

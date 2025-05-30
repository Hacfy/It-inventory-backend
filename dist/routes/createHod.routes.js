"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createHOD_controllers_1 = require("../controllers/createHOD.controllers");
const auth_jwt_1 = require("../middleware/auth.jwt");
const HodLogin_controllers_1 = require("../controllers/HodLogin.controllers");
const router = (0, express_1.Router)();
router.post("/create", auth_jwt_1.verifyAdminToken, createHOD_controllers_1.createHOD);
router.post("/:hodId/departments", auth_jwt_1.verifyAdminToken, createHOD_controllers_1.assignDepartmentsToHod);
router.post("/login", HodLogin_controllers_1.hodLogin);
router.get("/me", auth_jwt_1.verifyHODToken, HodLogin_controllers_1.meHOD);
exports.default = router;

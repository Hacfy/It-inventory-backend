"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_jwt_1 = require("../middleware/auth.jwt");
const createlab_components_1 = require("../controllers/createlab.components");
const router = (0, express_1.Router)();
router.post("/create", auth_jwt_1.verifyAdminToken, createlab_components_1.createLab);
exports.default = router;

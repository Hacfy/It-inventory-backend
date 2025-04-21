"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_jwt_1 = require("../middleware/auth.jwt");
const college_1 = require("../controllers/college");
const router = (0, express_1.Router)();
router.post('/create-college', auth_jwt_1.verifyAdminToken, college_1.createCollege);
exports.default = router;

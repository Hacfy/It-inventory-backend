"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const staff_controllers_1 = require("../controllers/staff.controllers");
const auth_jwt_1 = require("../middleware/auth.jwt");
const router = express_1.default.Router();
router.post('/login', staff_controllers_1.loginStaff);
router.get('/me', auth_jwt_1.verifyStaffToken, staff_controllers_1.me);
router.post('/forgot-password', staff_controllers_1.forgotPassword);
router.post('/reset-password', staff_controllers_1.resetPassword);
exports.default = router;
//# sourceMappingURL=staff.routes.js.map
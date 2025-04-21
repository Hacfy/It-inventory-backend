"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authcontroller_1 = require("../controllers/authcontroller");
const auth_jwt_1 = require("../middleware/auth.jwt");
const router = express_1.default.Router();
router.post('/login', authcontroller_1.loginAdmin);
router.get('/me', auth_jwt_1.verifyAdminToken, authcontroller_1.me);
router.post('/forgot-password', authcontroller_1.forgotPassword);
router.post('/reset-password', authcontroller_1.resetPassword);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map
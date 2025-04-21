"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createDepratment_1 = require("../controllers/createDepratment");
const auth_jwt_1 = require("../middleware/auth.jwt");
const router = express_1.default.Router();
router.post("/create", auth_jwt_1.verifyAdminToken, createDepratment_1.createDepartment);
exports.default = router;

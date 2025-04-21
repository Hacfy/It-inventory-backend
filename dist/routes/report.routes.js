"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const report_controllers_1 = require("../controllers/report.controllers");
const auth_jwt_1 = require("../middleware/auth.jwt");
const router = express_1.default.Router();
router.post("/update", auth_jwt_1.verifyHODToken, report_controllers_1.updateComponentStatus);
exports.default = router;

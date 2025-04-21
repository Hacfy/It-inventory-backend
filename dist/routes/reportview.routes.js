"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const reportadmin_controllers_1 = require("../controllers/reportadmin.controllers");
const auth_jwt_1 = require("../middleware/auth.jwt");
router.get("/all", auth_jwt_1.verifyAdminToken, reportadmin_controllers_1.getAllReports);
router.get("/:id", auth_jwt_1.verifyAdminToken, reportadmin_controllers_1.getReportById);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createStaff_controllers_1 = require("../controllers/createStaff.controllers");
const auth_jwt_1 = require("../middleware/auth.jwt");
const router = express_1.default.Router();
router.post('/create', auth_jwt_1.verifyAdminToken, createStaff_controllers_1.createStaff);
router.get("/all", createStaff_controllers_1.getAllStaff);
router.get("/:id", createStaff_controllers_1.getStaffById);
router.delete("/delete/:id", createStaff_controllers_1.deleteStaff);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const warehouse_1 = require("../controllers/warehouse");
const auth_jwt_1 = require("../middleware/auth.jwt");
const router = express_1.default.Router();
router.post('/create', auth_jwt_1.verifyAdminToken, warehouse_1.createWarehouse);
exports.default = router;

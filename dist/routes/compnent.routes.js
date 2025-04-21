"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const component_controlers_1 = require("../controllers/component.controlers");
const auth_jwt_1 = require("../middleware/auth.jwt");
const router = express_1.default.Router();
router.post('/create', auth_jwt_1.verifyAdminToken, component_controlers_1.createComponent);
exports.default = router;

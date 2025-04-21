"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const componentRequest_controllers_1 = require("../controllers/componentRequest.controllers");
const router = express_1.default.Router();
router.post('/request', componentRequest_controllers_1.requestComponentCreation);
exports.default = router;
//# sourceMappingURL=componentRequest.routes.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_controllers_1 = require("../controllers/admin.controllers");
const router = express_1.default.Router();
router.post('/create', admin_controllers_1.createAdmin);
router.put('/update/:id', admin_controllers_1.updateAdmin);
router.get('/all', admin_controllers_1.getAllAdmins);
router.get('/:id', admin_controllers_1.getAdminById);
router.delete('/delete/:id', admin_controllers_1.deleteAdmin);
exports.default = router;
//# sourceMappingURL=admin.routes.js.map
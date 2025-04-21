"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminLoginSchema = exports.AdminUpdateSchema = exports.AdminSignUpSchema = void 0;
const zod_1 = require("zod");
exports.AdminSignUpSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters"),
    phone: zod_1.z.string().min(10).max(15),
});
exports.AdminUpdateSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    email: zod_1.z.string().email().optional(),
    password: zod_1.z.string().min(6).optional(),
    phone: zod_1.z.string().optional(),
});
exports.AdminLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
//# sourceMappingURL=admin.shema.js.map
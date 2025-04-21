"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffLoginSchema = exports.CeateStaffShema = void 0;
const zod_1 = require("zod");
exports.CeateStaffShema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6, "Minimum 6 charector required"),
    phone: zod_1.z.string().min(10).max(15),
    collegeId: zod_1.z.number(),
    adminId: zod_1.z.number(),
});
exports.StaffLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(4, "Minimum 4 charector are required")
});

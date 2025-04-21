"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HodLoginSchema = exports.HodSignupSchema = void 0;
const zod_1 = require("zod");
exports.HodSignupSchema = zod_1.z.object({
    name: zod_1.z.string().min(4, "Name is required"),
    emial: zod_1.z.string().email(),
    password: zod_1.z.string().min(6, "Strong password is required"),
    phone: zod_1.z.string().min(10).max(15),
    collegeId: zod_1.z.number(),
    adminId: zod_1.z.number(),
    deparrtmentIds: zod_1.z.array(zod_1.z.number())
});
exports.HodLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6, "Strong password is required")
});
//# sourceMappingURL=hod.schema.js.map
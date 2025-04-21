"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCollegeSchema = void 0;
const zod_1 = require("zod");
exports.CreateCollegeSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    address: zod_1.z.string().min(1),
    collegeId: zod_1.z.string().optional(),
});

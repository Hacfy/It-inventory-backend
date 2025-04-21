"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabSchema = void 0;
const zod_1 = require("zod");
exports.LabSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, "Lab name is required"),
    departmentId: zod_1.z.number()
});
//# sourceMappingURL=lab.schema.js.map
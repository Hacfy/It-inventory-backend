"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentSchema = void 0;
const zod_1 = require("zod");
exports.DepartmentSchema = zod_1.z.object({
    name: zod_1.z.string().min(4, "Dapartment name is required")
});
//# sourceMappingURL=department.schema.js.map
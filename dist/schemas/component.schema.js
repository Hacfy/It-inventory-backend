"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentSchema = void 0;
const zod_1 = require("zod");
exports.ComponentSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, "component name is required"),
    type: zod_1.z.string(),
    brand: zod_1.z.string().min(2, "Brand nam eis reuired"),
});

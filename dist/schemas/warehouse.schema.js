"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WareHouseSchema = void 0;
const zod_1 = require("zod");
exports.WareHouseSchema = zod_1.z.object({
    name: zod_1.z.string().min(4, "Warehouse name is required"),
    warehouseId: zod_1.z.string().min(1, "College ID is required"),
});
//# sourceMappingURL=warehouse.schema.js.map
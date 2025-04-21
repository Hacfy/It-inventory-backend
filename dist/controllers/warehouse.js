"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWarehouse = void 0;
const prisma_1 = require("../generated/prisma");
const warehouse_schema_1 = require("../schemas/warehouse.schema");
const prisma = new prisma_1.PrismaClient();
const createWarehouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const parsed = warehouse_schema_1.WareHouseSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.flatten() });
    }
    const { name, collegeId } = req.body;
    const adminId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    if (!collegeId) {
        return res.status(400).json({ message: 'collegeId is required' });
    }
    try {
        const college = yield prisma.college.findUnique({
            where: { id: collegeId },
        });
        if (!college) {
            return res.status(404).json({ message: 'College not found' });
        }
        const warehouseId = `WH-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${Date.now()}`;
        const warehouse = yield prisma.warehouse.create({
            data: {
                name,
                collegeId,
                adminId,
                warehouseId,
            },
        });
        res.status(201).json({
            message: 'Warehouse created successfully',
            warehouse,
        });
    }
    catch (error) {
        console.error('Error creating warehouse:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.createWarehouse = createWarehouse;
//# sourceMappingURL=warehouse.js.map
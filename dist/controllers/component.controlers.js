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
exports.getComponentId = exports.getAllComponent = exports.createComponent = void 0;
const prisma_1 = require("../generated/prisma");
const component_schema_1 = require("../schemas/component.schema");
const prisma = new prisma_1.PrismaClient();
const createComponent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const parsed = component_schema_1.ComponentSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.flatten() });
    }
    try {
        const { name, type, brand, modelNumber, serialNumber, collegeId, labId, warehouseId } = req.body;
        const adminId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        if (!name || !type || !brand || !modelNumber || !serialNumber || !collegeId || !labId || !adminId || !warehouseId) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const lab = yield prisma.lab.findUnique({ where: { id: labId } });
        if (!lab) {
            return res.status(404).json({ success: false, message: "Lab not found" });
        }
        const component = yield prisma.component.create({
            data: {
                name,
                type,
                brand,
                modelNumber,
                serialNumber,
                collegeId,
                labId,
                adminId,
                warehouseId
            },
        });
        return res.status(201).json({ success: true, message: "Component created successfully", data: component });
    }
    catch (error) {
        console.error('Error creating component:', error);
        return res.status(500).json({ success: false, message: 'Error creating component', error: error.message });
    }
});
exports.createComponent = createComponent;
const getAllComponent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { collegeId, adminId, labId, warehouseId, status } = req.params;
    const validStatuses = ['WORKING', 'FAULTY', 'UNDER_REPAIR', 'REPLACED'];
    if (status && !validStatuses.includes(status)) {
        return res.status(400).json({ message: 'Invalid status provided' });
    }
    try {
        const prismaStatus = status ? prisma_1.Status[status] : undefined;
        const components = yield prisma.component.findMany({
            where: {
                collegeId: Number(collegeId),
                adminId: Number(adminId),
                labId: Number(labId),
                warehouseId: Number(warehouseId),
                status: prismaStatus,
            },
        });
        if (components.length === 0) {
            return res.status(404).json({ message: 'No components found' });
        }
        return res.status(200).json(components);
    }
    catch (err) {
        console.error('Error fetching components:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getAllComponent = getAllComponent;
const getComponentId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const component = yield prisma.component.findUnique({
            where: { id: id },
            include: {
                college: true,
                admin: true,
                lab: true,
                warehouse: true,
            },
        });
        if (!component) {
            return res.status(404).json({ message: "Component not found" });
        }
        return res.status(200).json(component);
    }
    catch (err) {
        console.error('Error fetching component:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getComponentId = getComponentId;

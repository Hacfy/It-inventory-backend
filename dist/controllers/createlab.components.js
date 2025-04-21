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
exports.getAllLab = exports.getLabById = exports.createLab = void 0;
const prisma_1 = require("../generated/prisma");
const lab_schema_1 = require("../schemas/lab.schema");
const prisma = new prisma_1.PrismaClient();
const createLab = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const parsed = lab_schema_1.LabSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.flatten() });
    }
    const { name, departmentId } = req.body;
    const adminId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const department = yield prisma.department.findUnique({
            where: { id: departmentId },
            include: { hod: true }
        });
        if (!department) {
            return res.status(404).json({ message: "Department not found" });
        }
        if (!department.hodId || !department.hod) {
            return res.status(400).json({ message: "Department has no assigned HOD" });
        }
        const existingLab = yield prisma.lab.findFirst({
            where: {
                name,
                departmentId
            }
        });
        if (existingLab) {
            return res.status(400).json({ message: "Lab name already exists in this department" });
        }
        const lab = yield prisma.lab.create({
            data: {
                name,
                departmentId,
                adminId
            }
        });
        return res.status(201).json({
            message: "Lab created successfully",
            lab
        });
    }
    catch (error) {
        console.error("Error creating lab:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.createLab = createLab;
const getLabById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const lab = yield prisma.lab.findUnique({
            where: { id: id },
            include: {
                department: true,
                admin: true,
                components: true
            }
        });
        res.status(200).json(lab);
    }
    catch (err) {
        res.status(404).json({ message: "Lab not found" });
    }
});
exports.getLabById = getLabById;
const getAllLab = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const labs = yield prisma.lab.findMany({
            where: {
                departmentId: Number(req.params.departmentId),
                adminId: Number(req.params.adminId)
            },
            include: {
                department: true,
                admin: true,
                components: true
            }
        });
        res.status(200).json(labs);
    }
    catch (err) {
        res.status(404).json({ message: "Lab not Found" });
    }
});
exports.getAllLab = getAllLab;
//# sourceMappingURL=createlab.components.js.map
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
exports.getAllDepartment = exports.getDepartmentId = exports.createDepartment = void 0;
const prisma_1 = require("../generated/prisma");
const department_schema_1 = require("../schemas/department.schema");
const prisma = new prisma_1.PrismaClient();
const generateUniqueDepartmentId = () => {
    return `DEP-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${Date.now()}`;
};
const createDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const parsed = department_schema_1.DepartmentSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: (_a = parsed.error) === null || _a === void 0 ? void 0 : _a.flatten });
    }
    const { name } = req.body;
    const adminId = (_b = req.user) === null || _b === void 0 ? void 0 : _b.id;
    try {
        const college = yield prisma.college.findFirst({
            where: { adminId }
        });
        if (!college) {
            return res.status(400).json({ message: 'College not found' });
        }
        const departmentId = generateUniqueDepartmentId();
        const exists = yield prisma.department.findUnique({
            where: { departmentId }
        });
        console.log('Exists', exists);
        if (exists) {
            return res.status(400).json({ message: 'Department ID already exists' });
        }
        const department = yield prisma.department.create({
            data: {
                name,
                departmentId,
                collegeId: college.id,
                adminId
            },
            include: {
                admin: true
            }
        });
        res.status(201).json({
            message: 'Department created successfully',
            department
        });
    }
    catch (e) {
        console.log('Error creating department', e);
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});
exports.createDepartment = createDepartment;
const getDepartmentId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const department = yield prisma.department.findUnique({
            where: { id },
            include: {
                admin: true,
                college: true,
                components: true,
                hod: true,
            },
        });
        if (!department) {
            return res.status(404).json({ message: "Department not found" });
        }
        res.status(200).json(department);
    }
    catch (err) {
        console.error("Error retrieving department:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.getDepartmentId = getDepartmentId;
const getAllDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const departments = yield prisma.department.findMany({
            where: {
                collegeId: Number(req.params.collegeId),
                adminId: Number(req.params.adminId),
            },
            include: {
                admin: true,
                college: true,
                components: true
            }
        });
        if (!departments) {
            return res.status(404).json({ message: "Department not found" });
        }
        res.status(200).json(departments);
    }
    catch (err) {
        console.error("Error retriving department : ", err);
        res.status(500).json({ message: "Intrenal server error" });
    }
});
exports.getAllDepartment = getAllDepartment;
//# sourceMappingURL=createDepratment.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllHod = exports.getHodById = exports.assignDepartmentsToHod = exports.createHOD = void 0;
// controllers/hod.ts
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = require("../generated/prisma");
const hod_schema_1 = require("../schemas/hod.schema");
// import { PrismaClient } from "@prisma/client";
const prisma = new prisma_1.PrismaClient();
const createHOD = async (req, res) => {
    const parsed = hod_schema_1.HodSignupSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.flatten() });
    }
    const { name, email, password, phone, collegeId, adminId, departmentIds } = req.body;
    if (!name || !email || !password || !phone || !collegeId || !adminId) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const existingHod = await prisma.hOD.findUnique({ where: { email } });
        if (existingHod) {
            return res.status(400).json({ message: 'Email already in use' });
        }
        let validDepartments = [];
        if (Array.isArray(departmentIds) && departmentIds.length > 0) {
            const departments = await prisma.department.findMany({
                where: { id: { in: departmentIds } }
            });
            const foundIds = new Set(departments.map(d => d.id));
            const missing = departmentIds.filter((id) => !foundIds.has(id));
            if (missing.length > 0) {
                return res.status(400).json({
                    message: `These department IDs were not found: [${missing.join(', ')}]`
                });
            }
            const wrongCollege = departments.filter(d => d.collegeId !== collegeId);
            if (wrongCollege.length > 0) {
                const badIds = wrongCollege.map(d => d.id);
                return res.status(400).json({
                    message: `These departments do not belong to the selected college: [${badIds.join(', ')}]`
                });
            }
            validDepartments = departmentIds.map((id) => ({ id }));
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const hod = await prisma.hOD.create({
            data: {
                name,
                email,
                password: hashedPassword,
                phone,
                collegeId,
                adminId,
                ...(validDepartments.length > 0 ? {
                    departments: {
                        connect: validDepartments
                    }
                } : {})
            },
            include: { departments: true },
        });
        res.status(201).json({
            message: 'HOD created successfully',
            hod: {
                id: hod.id,
                name: hod.name,
                email: hod.email,
                phone: hod.phone,
                departments: hod.departments,
            },
        });
    }
    catch (err) {
        console.error('Error creating HOD:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.createHOD = createHOD;
const assignDepartmentsToHod = async (req, res) => {
    const hodId = Number(req.params.hodId);
    const { departmentIds } = req.body;
    if (!Array.isArray(departmentIds) || departmentIds.length === 0) {
        return res.status(400).json({ message: 'Please provide an array of departmentIds' });
    }
    try {
        const hod = await prisma.hOD.findUnique({ where: { id: hodId } });
        if (!hod) {
            return res.status(404).json({ message: 'HOD not found' });
        }
        const departments = await prisma.department.findMany({
            where: { id: { in: departmentIds } }
        });
        const foundIds = new Set(departments.map(d => d.id));
        const missing = departmentIds.filter((id) => !foundIds.has(id));
        if (missing.length > 0) {
            return res.status(400).json({
                message: `These department IDs were not found: [${missing.join(', ')}]`
            });
        }
        const wrongCollege = departments.filter(d => d.collegeId !== hod.collegeId);
        if (wrongCollege.length > 0) {
            const badIds = wrongCollege.map(d => d.id);
            return res.status(400).json({
                message: `These departments do not belong to HOD’s college: [${badIds.join(', ')}]`
            });
        }
        const updatedHod = await prisma.hOD.update({
            where: { id: hodId },
            data: {
                departments: {
                    connect: departmentIds.map((id) => ({ id })),
                },
            },
            include: { departments: true },
        });
        return res.status(200).json({
            message: 'Departments assigned successfully',
            hod: {
                id: updatedHod.id,
                departments: updatedHod.departments
            }
        });
    }
    catch (err) {
        console.error('Error assigning departments:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
exports.assignDepartmentsToHod = assignDepartmentsToHod;
const getHodById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const hod = await prisma.hOD.findUnique({
            where: { id: id },
            include: {
                departments: true,
                admin: true,
                college: true
            }
        });
        res.status(200).json(hod);
    }
    catch (err) {
        res.status(404).json({ message: "HOD not found" });
    }
};
exports.getHodById = getHodById;
const getAllHod = async (req, res) => {
    try {
        const hods = await prisma.hOD.findMany({
            where: {
                collegeId: Number(req.params.collegeId),
                adminId: Number(req.params.adminId),
            },
            include: {
                departments: true,
                admin: true,
            }
        });
        return res.status(200).json(hods);
    }
    catch (err) {
        res.status(404).json({ message: "Hod not found" });
    }
};
exports.getAllHod = getAllHod;

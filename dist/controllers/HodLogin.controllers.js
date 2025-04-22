"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meHOD = exports.hodLogin = void 0;
const prisma_1 = require("../generated/prisma");
// import { PrismaClient } from '@prisma/client';
const prisma = new prisma_1.PrismaClient();
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const hod_schema_1 = require("../schemas/hod.schema");
const hodLogin = async (req, res) => {
    const parsed = hod_schema_1.HodLoginSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.flatten() });
    }
    const { email, password } = req.body;
    try {
        const hod = await prisma.hOD.findUnique({
            where: { email },
        });
        if (!hod) {
            return res.status(404).json({ message: 'HOD not found' });
        }
        const isMatch = await bcryptjs_1.default.compare(password, hod.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const token = jsonwebtoken_1.default.sign({ id: hod.id, email: hod.email, role: 'HOD' }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return res.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            hod: {
                id: hod.id,
                name: hod.name,
                email: hod.email,
                phone: hod.phone,
                role: hod.role,
            },
        });
    }
    catch (e) {
        console.error('Login error:', e);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.hodLogin = hodLogin;
const meHOD = async (req, res) => {
    try {
        const { id } = req.user?.id;
        const hod = await prisma.hOD.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                role: true,
            },
        });
        if (!hod) {
            return res.status(404).json({ message: 'HOD not found' });
        }
        return res.status(200).json({
            message: 'HOD info fetched successfully',
            hod,
        });
    }
    catch (e) {
        console.error('Error fetching HOD info:', e);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.meHOD = meHOD;

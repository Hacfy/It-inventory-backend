"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdmin = exports.getAdminById = exports.getAllAdmins = exports.updateAdmin = exports.createAdmin = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const admin_shema_1 = require("../schemas/admin.shema");
const prisma = new client_1.PrismaClient();
const createAdmin = async (req, res) => {
    const parsed = admin_shema_1.AdminSignUpSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.flatten() });
    }
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
        return res.status(400).json({ message: "All deirls are required" });
    }
    const existing = await prisma.admin.findUnique({ where: { email } });
    if (existing)
        return res.status(400).json({ message: "Admin already exists" });
    const hashedPassword = await bcryptjs_1.default.hash(password, 10);
    const admin = await prisma.admin.create({
        data: { name, email, password: hashedPassword, phone }
    });
    res.status(201).json({
        message: 'Admin created',
        admin: { id: admin.id, name: admin.name, email: admin.email, phone: admin.phone }
    });
};
exports.createAdmin = createAdmin;
const updateAdmin = async (req, res) => {
    const parsed = admin_shema_1.AdminUpdateSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.flatten() });
    }
    const id = Number(req.params.id);
    const { name, email, password, phone } = req.body;
    try {
        const data = {};
        if (name)
            data.name = name;
        if (email)
            data.email = email;
        if (phone)
            data.phone = phone;
        if (password)
            data.password = await bcryptjs_1.default.hash(password, 10);
        const updated = await prisma.admin.update({
            where: { id },
            data: data,
        });
        res.status(200).json({ message: "Admin updated", admin: updated });
    }
    catch (err) {
        res.status(400).json({ message: "Admin not found" });
    }
};
exports.updateAdmin = updateAdmin;
const getAllAdmins = async (req, res) => {
    const admins = await prisma.admin.findMany({
        select: { id: true, name: true, email: true, phone: true }
    });
    res.status(200).json(admins);
};
exports.getAllAdmins = getAllAdmins;
const getAdminById = async (req, res) => {
    const id = Number(req.params.id);
    const admin = await prisma.admin.findUnique({ where: { id } });
    if (!admin)
        return res.status(404).json({ message: "Admin is not FOund" });
    res.json(admin);
};
exports.getAdminById = getAdminById;
const deleteAdmin = async (req, res) => {
    const id = Number(req.params.id);
    try {
        await prisma.admin.delete({ where: { id } });
        res.status(200).json({ message: "Admin deleted Successfully" });
    }
    catch (err) {
        res.status(404).json({ message: "Admin not found" });
    }
};
exports.deleteAdmin = deleteAdmin;

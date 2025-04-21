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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStaff = exports.getStaffById = exports.getAllStaff = exports.createStaff = void 0;
const createStaff_shema_1 = require("../schemas/createStaff.shema");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient;
const createStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsed = createStaff_shema_1.CeateStaffShema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.flatten() });
        }
        const { name, email, password, phone } = req.body;
        if (!name || !email || !password || !phone) {
            return res.status(400).json({ message: "All are must be required " });
        }
        const existing = yield prisma.staff.findUnique({ where: { email } });
        if (existing)
            return res.status(400).json({ message: "Staff allready Exists" });
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const staff = yield prisma.staff.create({
            data: {
                name,
                email,
                password: hashedPassword,
                phone,
                collegeId: req.body.collegeId,
                adminId: req.body.adminId
            },
        });
        res.status(201).json({ message: "Staff crreated successfully",
            staff: { id: staff.id, name: staff.name, email: staff.email, phone: staff.phone }
        });
    }
    catch (err) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.createStaff = createStaff;
const getAllStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const staff = yield prisma.staff.findMany({
            select: { id: true, name: true, email: true, phone: true }
        });
        res.status(200).json(staff);
    }
    catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.getAllStaff = getAllStaff;
const getStaffById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const staff = yield prisma.staff.findUnique({
            where: { id: id }
        });
        if (!staff)
            return res.status(404).json({ message: "Staff not found" });
        res.status(200).json(staff);
    }
    catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.getStaffById = getStaffById;
const deleteStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        yield prisma.staff.delete({ where: { id: id } });
        res.status(200).json({ message: "Staff deleted successFully" });
    }
    catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.deleteStaff = deleteStaff;
//# sourceMappingURL=createStaff.controllers.js.map
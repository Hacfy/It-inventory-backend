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
exports.meHOD = exports.hodLogin = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const hod_schema_1 = require("../schemas/hod.schema");
const hodLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsed = hod_schema_1.HodLoginSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.flatten() });
    }
    const { email, password } = req.body;
    try {
        const hod = yield prisma.hOD.findUnique({
            where: { email },
        });
        if (!hod) {
            return res.status(404).json({ message: 'HOD not found' });
        }
        const isMatch = yield bcryptjs_1.default.compare(password, hod.password);
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
});
exports.hodLogin = hodLogin;
const meHOD = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { id } = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        const hod = yield prisma.hOD.findUnique({
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
});
exports.meHOD = meHOD;
//# sourceMappingURL=HodLogin.controllers.js.map
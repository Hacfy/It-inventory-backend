"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.forgotPassword = exports.me = exports.loginAdmin = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
const admin_shema_1 = require("../schemas/admin.shema");
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});
const loginAdmin = async (req, res) => {
    const parsed = admin_shema_1.AdminLoginSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.flatten() });
    }
    const { email, password } = req.body;
    try {
        const admin = await prisma.admin.findUnique({ where: { email } });
        if (!admin)
            return res.status(404).json({ message: 'Admin not found' });
        const isMatch = await bcryptjs_1.default.compare(password, admin.password);
        if (!isMatch)
            return res.status(401).json({ message: 'Invalid credentials' });
        const token = jsonwebtoken_1.default.sign({ id: admin.id, email: admin.email, name: admin.name, role: admin.role }, JWT_SECRET, { expiresIn: '1d' });
        return res.status(200).json({
            message: 'Login successful',
            token,
            admin: {
                id: admin.id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
            },
        });
    }
    catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};
exports.loginAdmin = loginAdmin;
const me = async (req, res) => {
    try {
        const { id } = req.user;
        const admin = await prisma.admin.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            },
        });
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        return res.status(200).json({
            message: 'Admin info fetched successfully',
            admin,
        });
    }
    catch (error) {
        console.error('Error fetching admin info:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
exports.me = me;
const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const admin = await prisma.admin.findUnique({ where: { email } });
        if (!admin)
            return res.status(404).json({ message: 'Admin not found' });
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiry = new Date(Date.now() + 10 * 60 * 1000);
        await prisma.admin.update({
            where: { email },
            data: {
                resetToken: otp,
                resetTokenExpiry: expiry,
            },
        });
        const mailOptions = {
            from: EMAIL_USER,
            to: email,
            subject: 'Password Reset OTP',
            text: `Your OTP for password reset is: ${otp}. It will expire in 10 minutes.`,
        };
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'OTP sent successfully' });
    }
    catch (error) {
        console.error('Error sending OTP:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
exports.forgotPassword = forgotPassword;
const resetPassword = async (req, res) => {
    const { otp, newPassword } = req.body;
    try {
        const admin = await prisma.admin.findFirst({
            where: {
                resetToken: otp,
                resetTokenExpiry: {
                    gt: new Date(),
                },
            },
        });
        if (!admin) {
            return res.status(400).json({ message: 'Invalid or expired OTP' });
        }
        const hashedPassword = await bcryptjs_1.default.hash(newPassword, 10);
        await prisma.admin.update({
            where: { id: admin.id },
            data: {
                password: hashedPassword,
                resetToken: null,
                resetTokenExpiry: null,
            },
        });
        return res.status(200).json({ message: 'Password has been reset successfully' });
    }
    catch (error) {
        console.error('Error resetting password:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
exports.resetPassword = resetPassword;

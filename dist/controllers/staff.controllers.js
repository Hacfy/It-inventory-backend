"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.forgotPassword = exports.me = exports.loginStaff = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const client_1 = require("@prisma/client");
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    },
});
const loginStaff = async (req, res) => {
    // if (!JWT_SECRET) {
    //     console.error("JWT_SECRET is not defined in .env");
    //     return res.status(500).json({ message: "Internal server error" });
    // }
    // const parsed = StaffLoginSchema.safeParse(req.body);
    // if (!parsed.success) {
    //     return res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() });
    // }
    // const { email, password } = parsed.data;
    // try {
    //     const staff = await prisma.staff.findUnique({
    //         where: { email }
    //     });
    //     if (!staff) {
    //         return res.status(404).json({ message: "Staff not found" });
    //     }
    //     const isMatch = await bcrypt.compare(password, staff.password);
    //     if (!isMatch) {
    //         return res.status(401).json({ message: "Invalid password" });
    //     }
    //     const token = jwt.sign(
    //         { id: staff.id, email: staff.email, role: "STAFF" }, 
    //         process.env.JWT_SECRET as string, 
    //         { expiresIn: "7d" }
    //       );
    //     return res.status(200).json({
    //         success: true,
    //         message: "Login successful",
    //         token,
    //         staff: {
    //             id: staff.id,
    //             name: staff.name,
    //             email: staff.email,
    //             role: staff.role
    //         }
    //     });
    // } catch (err) {
    //     console.error("Login error:", err);
    //     return res.status(500).json({ message: "Something went wrong" });
    // }
};
exports.loginStaff = loginStaff;
const me = async (req, res) => {
    //   try {
    //     const { id } = (req as any).user;
    //     const staff = await prisma.staff.findUnique({
    //       where: { id },
    //       select: {
    //         id: true,
    //         name: true,
    //         email: true,
    //         role: true,
    //       },
    //     });
    //     if (!staff) {
    //         return res.status(404).json({ message: 'Staff not found' });
    //       }
    //     return res.status(200).json({
    //       message: 'staff info fetched successfully',
    //       staff,
    //     });
    //   } catch (error) {
    //     console.error('Error fetching staff info:', error);
    //     return res.status(500).json({ message: 'Internal server error' });
    //   }
};
exports.me = me;
const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const staff = await prisma.staff.findUnique({
            where: { email }
        });
        if (!staff) {
            return res.status(404).json({ message: "Staff not found" });
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiry = new Date(Date.now() + 10 * 60 * 1000);
        await prisma.staff.update({
            where: { email },
            data: {
                resetToken: otp,
                resetTokenExpiry: expiry,
            },
        });
        const mailOptions = {
            from: EMAIL_USER,
            to: email,
            subject: "Password Reset OTP",
            text: `Your OTP for password reset is : ${otp}. It will expire in 10 minutes.`
        };
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: "Otp send Successfully" });
    }
    catch (err) {
        console.error("Error sending OTP : ", err);
        return res.status(500).send({ message: "Intrernal server error" });
    }
};
exports.forgotPassword = forgotPassword;
const resetPassword = async (req, res) => {
    const { otp, newPassword } = req.body;
    try {
        const staff = await prisma.staff.findFirst({
            where: {
                resetToken: otp,
                resetTokenExpiry: {
                    gt: new Date(),
                },
            }
        });
        if (!staff) {
            return res.status(400).json({ message: "Invalid or Expired OTP" });
        }
        const hashedPassword = await bcryptjs_1.default.hash(newPassword, 10);
        await prisma.staff.update({
            where: { id: staff.id },
            data: {
                password: hashedPassword,
                resetToken: null,
                resetTokenExpiry: null,
            },
        });
        return res.status(200).json({ message: "Password has been reset successfully" });
    }
    catch (err) {
        console.error('Error resetting password:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
exports.resetPassword = resetPassword;

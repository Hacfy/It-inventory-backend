"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyHODToken = exports.verifyStaffToken = exports.verifyAdminToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error("JWT_SECRET not found in .env");
}
const verifyToken = (role) => {
    return (req, res, next) => {
        const headerKey = role === "ADMIN" ? "x-admin-token" :
            role === "STAFF" ? "x-staff-token" :
                "x-hod-token";
        const token = req.headers[headerKey.toLowerCase()];
        console.log("Received Token:", token);
        if (!token) {
            return res.status(401).json({ message: `${role} token missing` });
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
            console.log("Decoded Token:", decoded);
            if (decoded.role !== role) {
                return res.status(403).json({ message: `Only ${role} access allowed` });
            }
            req.user = {
                id: decoded.id,
                email: decoded.email,
                role: decoded.role,
            };
            console.log("User from Token:", req.user);
            next();
        }
        catch (err) {
            console.error("JWT Error:", err.message);
            return res.status(401).json({ message: "Invalid or expired token" });
        }
    };
};
exports.verifyAdminToken = verifyToken("ADMIN");
exports.verifyStaffToken = verifyToken("STAFF");
exports.verifyHODToken = verifyToken("HOD");

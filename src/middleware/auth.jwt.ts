import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface JwtPayload {
  id: number;
  email: string;
  role: "ADMIN" | "STAFF" | "HOD";
}

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET not found in .env");
}

const verifyToken = (role: "ADMIN" | "STAFF" | "HOD") => {
  return (req: any, res:any, next: any) => {
    const headerKey =
      role === "ADMIN" ? "x-admin-token" :
      role === "STAFF" ? "x-staff-token" :
      "x-hod-token";

    const token = req.headers[headerKey.toLowerCase()] as string;

    console.log("Received Token:", token);

    if (!token) {
      return res.status(401).json({ message: `${role} token missing` });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

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
    } catch (err: any) {
      console.error("JWT Error:", err.message);
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  };
};

export const verifyAdminToken = verifyToken("ADMIN");
export const verifyStaffToken = verifyToken("STAFF");
export const verifyHODToken = verifyToken("HOD");

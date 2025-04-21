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
exports.getReportById = exports.getAllReports = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const getAllReports = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const adminId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const reports = yield prisma.report.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                component: {
                    include: {
                        lab: true,
                    },
                },
                hod: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
        });
        return res.status(200).json({
            success: true,
            message: 'Reports fetched successfully',
            data: reports,
        });
    }
    catch (error) {
        console.error('Error fetching reports:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch reports',
            error: error.message,
        });
    }
});
exports.getAllReports = getAllReports;
const getReportById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid report ID" });
    }
    try {
        const report = yield prisma.report.findUnique({
            where: { id },
            include: {
                component: true,
                hod: true,
                department: true,
            },
        });
        if (!report) {
            return res.status(404).json({ message: "Report not found" });
        }
        return res.status(200).json({
            message: "Report fetched successfully",
            report,
        });
    }
    catch (error) {
        console.error("Error fetching report by ID:", error);
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
});
exports.getReportById = getReportById;

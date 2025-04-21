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
exports.updateComponentStatus = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const updateComponentStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { componentId, status, message, departmentId } = req.body;
    const hodId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        if (!Object.values(prisma_1.Status).includes(status)) {
            return res.status(400).json({ success: false, message: "Invalid status" });
        }
        const component = yield prisma.component.findUnique({ where: { id: componentId } });
        if (!component) {
            return res.status(404).json({ success: false, message: "Component not found" });
        }
        const lab = yield prisma.lab.findUnique({ where: { id: component.labId } });
        if (!lab) {
            return res.status(404).json({ success: false, message: "Lab not found" });
        }
        const department = yield prisma.department.findUnique({ where: { id: lab.departmentId } });
        console.log('Fetched Department:', department);
        console.log('Department.hodId:', department === null || department === void 0 ? void 0 : department.hodId);
        console.log('Logged-in HOD ID:', hodId);
        console.log('Typeof department.hodId:', typeof (department === null || department === void 0 ? void 0 : department.hodId));
        console.log('Typeof hodId:', typeof hodId);
        if (!department || department.hodId !== Number(hodId)) {
            return res.status(403).json({ success: false, message: "HOD is not assigned to this department" });
        }
        yield prisma.component.update({
            where: { id: componentId },
            data: { status },
        });
        const report = yield prisma.report.create({
            data: {
                componentId,
                hodId,
                status,
                departmentId,
                message: message || 'No message provided',
            },
        });
        return res.status(200).json({
            success: true,
            message: "Component status updated and report submitted",
            report,
        });
    }
    catch (error) {
        console.error('Error updating component status:', error);
        return res.status(500).json({ success: false, message: 'Error updating component status', error: error.message });
    }
});
exports.updateComponentStatus = updateComponentStatus;

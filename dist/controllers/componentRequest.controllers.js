"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestComponentCreation = void 0;
// import { PrismaClient } from '../generated/prisma';
const prisma = new client_1.PrismaClient();
const client_1 = require("@prisma/client");
const requestComponentCreation = async (req, res) => {
    //   try {
    //     const staffId = req.user?.id;
    //     const { name, type, brand, modelNumber, serialNumber } = req.body;
    //     if (!name || !type || !brand || !modelNumber || !serialNumber) {
    //       return res.status(400).json({
    //         success: false,
    //         message: "All fields are required",
    //       });
    //     }
    //     const request = await prisma.componentRequest.create({
    //       data: {
    //         name,
    //         type,
    //         brand,
    //         modelNumber,
    //         serialNumber,
    //         staffId,
    //         status: 'PENDING',
    //       },
    //     });
    //     res.status(201).json({
    //       success: true,
    //       message: "Component request sent to admin",
    //       // data: request,
    //     });
    //   } catch (e) {
    //     console.log("Error in requestComponentCreation:", e);
    //     res.status(500).json({ success: false, message: "Internal server error" });
    //   }
    // };
    // export const approveRequest = async (req: any, res: any) => {
    //   try {
    //     const requestId = parseInt(req.params.id);
    //     const request = await prisma.componentRequest.findUnique({
    //       where: { id: requestId },
    //       include: { staff: true },
    //     });
    //     if (!request) {
    //       return res.status(404).json({ success: false, message: "Request not found" });
    //     }
    //     const updatedRequest = await prisma.componentRequest.update({
    //       where: { id: requestId },
    //       data: { status: 'APPROVED' },
    //     });
    //     const warehouse = await prisma.warehouse.findFirst({
    //       where: { collegeId: request.staff.collegeId },
    //     });
    //     if (!warehouse) {
    //       return res.status(404).json({ success: false, message: "Warehouse not found" });
    //     }
    //     const component = await prisma.component.create({
    //       data: {
    //         name: request.name,
    //         type: request.type as any,
    //         brand: request.brand,
    //         modelNumber: request.modelNumber,
    //         serialNumber: request.serialNumber,
    //         collegeId: request.staff.collegeId,
    //         adminId: request.staff.adminId,
    //         warehouseId: warehouse.id,
    //         // status: 'WORKING',
    //       },
    //     });
    //     res.status(200).json({
    //       success: true,
    //       message: 'Request approved and component created',
    //       data: { request: updatedRequest, component },
    //     });
    //   } catch (error: any) {
    //     console.error('Error in approveRequest:', error);
    //     res.status(500).json({ success: false, message: 'Failed to approve request', error: error.message });
    //   }
    // };
    // export const rejectRequest = async (req: any, res: any) => {
    //   try {
    //     const requestId = parseInt(req.params.id);
    //     const updatedRequest = await prisma.componentRequest.update({
    //       where: { id: requestId },
    //       data: { status: 'REJECTED' },
    //     });
    //     res.status(200).json({
    //       success: true,
    //       message: 'Request rejected',
    //       data: updatedRequest,
    //     });
    //   } catch (error: any) {
    //     console.error('Error in rejectRequest:', error);
    //     res.status(500).json({ success: false, message: 'Failed to reject request', error: error.message });
    //   }
};
exports.requestComponentCreation = requestComponentCreation;

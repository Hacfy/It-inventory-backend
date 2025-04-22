"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueCollegeId = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const generateUniqueCollegeId = async () => {
    let unique = false;
    let newId = '';
    while (!unique) {
        newId = 'CLG-' + Math.random().toString(36).substring(2, 8).toUpperCase();
        const existing = await prisma.college.findUnique({ where: { collegeId: newId } });
        if (!existing)
            unique = true;
    }
    return newId;
};
exports.generateUniqueCollegeId = generateUniqueCollegeId;

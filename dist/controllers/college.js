"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCollege = void 0;
const generateUniqueCollegeId_1 = require("../utils/generateUniqueCollegeId");
const collage_schema_1 = require("../schemas/collage.schema");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createCollege = async (req, res) => {
    const parsed = collage_schema_1.CreateCollegeSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.flatten() });
    }
    const { name, address } = req.body;
    const adminId = req.user.id;
    try {
        const collegeId = await (0, generateUniqueCollegeId_1.generateUniqueCollegeId)();
        const college = await prisma.college.create({
            data: {
                name,
                address,
                collegeId,
                adminId,
            },
        });
        res.status(201).json({
            message: 'College created successfully',
            college,
        });
    }
    catch (error) {
        console.error('Error creating college:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.createCollege = createCollege;

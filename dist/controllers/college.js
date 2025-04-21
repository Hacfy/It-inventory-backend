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
exports.createCollege = void 0;
const generateUniqueCollegeId_1 = require("../utils/generateUniqueCollegeId");
const collage_schema_1 = require("../schemas/collage.schema");
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createCollege = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsed = collage_schema_1.CreateCollegeSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.flatten() });
    }
    const { name, address } = req.body;
    const adminId = req.user.id;
    try {
        const collegeId = yield (0, generateUniqueCollegeId_1.generateUniqueCollegeId)();
        const college = yield prisma.college.create({
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
});
exports.createCollege = createCollege;

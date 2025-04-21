import { generateUniqueCollegeId } from '../utils/generateUniqueCollegeId';
import { CreateCollegeSchema } from '../schemas/collage.schema';
import { PrismaClient } from "../generated/prisma"
import { Request, Response } from 'express';
const prisma = new PrismaClient();

export const createCollege = async (req: any, res: any) => {
  const parsed = CreateCollegeSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }

  const { name, address } = req.body;
  const adminId = req.user.id; 

  try {
    const collegeId = await generateUniqueCollegeId(); 

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
  } catch (error) {
    console.error('Error creating college:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

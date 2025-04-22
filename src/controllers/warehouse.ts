import { PrismaClient } from '@prisma/client';
import { WareHouseSchema } from "../schemas/warehouse.schema";
import { Response , Request } from "express";
const prisma = new PrismaClient();

export const createWarehouse = async (req: any, res: any) => {
  const parsed = WareHouseSchema.safeParse(req.body);
  if (!parsed.success){
      return res.status(400).json({error : parsed.error.flatten()});
      
  }
  const { name, collegeId } = req.body;
  const adminId = req.user?.id;

  if (!collegeId) {
    return res.status(400).json({ message: 'collegeId is required' });
  }

  try {
    const college = await prisma.college.findUnique({
      where: { id: collegeId },
    });

    if (!college) {
      return res.status(404).json({ message: 'College not found' });
    }

    const warehouseId = `WH-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${Date.now()}`;

    const warehouse = await prisma.warehouse.create({
      data: {
        name,
        collegeId,
        adminId,
        warehouseId,
      },
    });

    res.status(201).json({
      message: 'Warehouse created successfully',
      warehouse,
    });
  } catch (error) {
    console.error('Error creating warehouse:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

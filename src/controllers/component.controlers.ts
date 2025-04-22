import { PrismaClient, Status } from '../generated/prisma';
import express from 'express';
import { ComponentSchema } from '../schemas/component.schema';
// import { PrismaClient, Status } from '@prisma/client';
const prisma = new PrismaClient();

export const createComponent = async (req: any, res: any) => {
  const parsed = ComponentSchema.safeParse(req.body);
  if (!parsed.success){
    return res.status(400).json({ error : parsed.error.flatten()})
  }
  try {
    const { name, type, brand, modelNumber, serialNumber, collegeId, labId , warehouseId } = req.body;
    const adminId = req.user?.id; 

    
    if (!name || !type || !brand || !modelNumber || !serialNumber || !collegeId || !labId || !adminId || !warehouseId) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    
    const lab = await prisma.lab.findUnique({ where: { id: labId } });
    if (!lab) {
      return res.status(404).json({ success: false, message: "Lab not found" });
    }

   
    const component = await prisma.component.create({
      data: {
        name,
        type,
        brand,
        modelNumber,
        serialNumber,
        collegeId,
        labId,
        adminId, 
        warehouseId
      },
    });

    return res.status(201).json({ success: true, message: "Component created successfully", data: component });
  } catch (error: any) {
    console.error('Error creating component:', error);
    return res.status(500).json({ success: false, message: 'Error creating component', error: error.message });
  }
};

export const getAllComponent = async (req: any, res: any) => {
  const { collegeId, adminId, labId, warehouseId, status } = req.params;


  const validStatuses = ['WORKING', 'FAULTY', 'UNDER_REPAIR', 'REPLACED'];


  if (status && !validStatuses.includes(status)) {
    return res.status(400).json({ message: 'Invalid status provided' });
  }

  try {
  
    const prismaStatus = status ? Status[status as keyof typeof Status] : undefined;

    const components = await prisma.component.findMany({
      where: {
        collegeId: Number(collegeId),
        adminId: Number(adminId),
        labId: Number(labId),
        warehouseId: Number(warehouseId),
        status: prismaStatus, 
      },
    });

    if (components.length === 0) {
      return res.status(404).json({ message: 'No components found' });
    }

    return res.status(200).json(components);
  } catch (err) {
    console.error('Error fetching components:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
export const getComponentId = async (req: any, res: any) => {
  const id = Number(req.params.id);
  try {
    const component = await prisma.component.findUnique({
      where: { id: id },
      include: {
        college: true,
        admin: true,
        lab: true,
        warehouse: true,
         
      },
    });

    if (!component) {
      return res.status(404).json({ message: "Component not found" });
    }

    return res.status(200).json(component);
  } catch (err) {
    console.error('Error fetching component:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

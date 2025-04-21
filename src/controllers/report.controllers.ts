import { PrismaClient, Status } from '../generated/prisma';
import { Request, Response } from 'express';

const prisma = new PrismaClient();


export const updateComponentStatus = async (req:any, res: any) => {
  const { componentId, status, message ,departmentId} = req.body;
  const hodId = req.user?.id; 

  try {
 
    if (!Object.values(Status).includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status" });
    }

   
    const component = await prisma.component.findUnique({ where: { id: componentId } });
    if (!component) {
      return res.status(404).json({ success: false, message: "Component not found" });
    }

   
    const lab = await prisma.lab.findUnique({ where: { id: component.labId } });
    if (!lab) {
      return res.status(404).json({ success: false, message: "Lab not found" });
    }
    
    
    const department = await prisma.department.findUnique({ where: { id: lab.departmentId } });
    
    console.log('Fetched Department:', department);
    console.log('Department.hodId:', department?.hodId);
    console.log('Logged-in HOD ID:', hodId);
    console.log('Typeof department.hodId:', typeof department?.hodId);
    console.log('Typeof hodId:', typeof hodId);
    
    if (!department || department.hodId !== Number(hodId)) {
      return res.status(403).json({ success: false, message: "HOD is not assigned to this department" });
    }
    
  
    await prisma.component.update({
      where: { id: componentId },
      data: { status },
    });


    const report = await prisma.report.create({
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

  } catch (error: any) {
    console.error('Error updating component status:', error);
    return res.status(500).json({ success: false, message: 'Error updating component status', error: error.message });
  }
};

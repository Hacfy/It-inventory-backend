import { z } from 'zod';
import { PrismaClient } from '../generated/prisma';
import { DepartmentSchema } from '../schemas/department.schema';
import express from 'express';
// import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


const generateUniqueDepartmentId = () => {
  return `DEP-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${Date.now()}`;
};

export const createDepartment = async (req: any, res:any) => {
  const parsed = DepartmentSchema.safeParse(req.body);
  if (!parsed.success){
      return res.status(400).json({error : parsed.error?.flatten})
  }
  const { name } = req.body; 
  const adminId = req.user?.id;
  
  try {
   
    const college = await prisma.college.findFirst({
      where: { adminId }
    });
    
    if (!college) {
      return res.status(400).json({ message: 'College not found' });
    }

    const departmentId = generateUniqueDepartmentId();

    const exists = await prisma.department.findUnique({
      where: { departmentId }
    });

    console.log('Exists', exists);
    
    if (exists) {
      return res.status(400).json({ message: 'Department ID already exists' });
    }

    
    const department = await prisma.department.create({
      data: {
        name,
        departmentId, 
        collegeId: college.id,
        adminId
      },
      include: {
        admin: true
      }
    });

    res.status(201).json({
      message: 'Department created successfully',
      department
    });
  } catch (e) {
    console.log('Error creating department', e);
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
};
export const getDepartmentId = async (req: any, res: any) => {
  const id = Number(req.params.id);
  try {
    const department = await prisma.department.findUnique({
      where: { id },
      include: {
        admin: true,
        college: true,

        HOD: true, 
      },
    });

    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

    res.status(200).json(department);
  } catch (err) {
    console.error("Error retrieving department:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllDepartment = async (req : any , res : any ) => {
    try {
      const departments = await prisma.department.findMany({
        where : {
          collegeId : Number(req.params.collegeId),
          adminId : Number(req.params.adminId),

        },
        include : {
          admin  : true ,
          college : true ,
         
        }
      });
      if(!departments) {
        return res.status(404).json({message : "Department not found"})
      }
      res.status(200).json(departments);
    }catch(err){
        console.error("Error retriving department : ", err);
        res.status(500).json({message : "Intrenal server error"});
    }
}



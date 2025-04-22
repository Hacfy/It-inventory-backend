import { PrismaClient } from '../generated/prisma';
import express from 'express';
import { LabSchema } from '../schemas/lab.schema';
// import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createLab = async (req: any, res:any) => {
  const parsed = LabSchema.safeParse(req.body);
  if(!parsed.success){
      return res.status(400).json({error : parsed.error.flatten()})
  }
  const { name, departmentId } = req.body;
  const adminId = req.user?.id;

  try {

    const department = await prisma.department.findUnique({
      where: { id: departmentId },
      include: { HOD: true }
    });

    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

   
    if (!department.hodId || !department.HOD) {
      return res.status(400).json({ message: "Department has no assigned HOD" });
    }

    const existingLab = await prisma.lab.findFirst({
      where: {
        name,
        departmentId
      }
    });

    if (existingLab) {
      return res.status(400).json({ message: "Lab name already exists in this department" });
    }

   
    const lab = await prisma.lab.create({
      data: {
        name,
        departmentId,
        adminId
      }
    });

    return res.status(201).json({
      message: "Lab created successfully",
      lab
    });

  } catch (error) {
    console.error("Error creating lab:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


export const getLabById = async ( req : any , res : any)=>{
  const id = Number(req.params.id);
  try{
    const lab = await prisma.lab.findUnique({
      where : {id : id },
      include : {
        department : true ,
        admin : true ,
       

      }
    });
    res.status(200).json(lab);
  }catch(err){
    res.status (404).json({message : "Lab not found"});
  }
}

export const getAllLab = async(req : any , res : any )=>{
  try {
    const labs = await prisma.lab.findMany({
      where : {
        departmentId : Number (req. params.departmentId),
        adminId : Number (req.params.adminId)

      },
      include : {
        department : true ,
        admin : true ,
      
         
      }
    });
    res.status(200).json(labs);

  }catch(err){
    res.status(404).json({message : "Lab not Found"});
  }
}
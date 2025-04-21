// controllers/hod.ts
import bcrypt from 'bcryptjs';
import { PrismaClient } from '../generated/prisma';
import express from 'express';
import { HodSignupSchema } from '../schemas/hod.schema';
import { number } from 'zod';

const prisma = new PrismaClient();

export const createHOD = async (req:any, res:any) => {

  const parsed = HodSignupSchema.safeParse(req.body);
  if(!parsed.success){
    return res.status(400).json({error : parsed.error.flatten()})
  }
  const { name, email, password, phone, collegeId, adminId, departmentIds } = req.body;

  if (!name || !email || !password || !phone || !collegeId || !adminId) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    
    const existingHod = await prisma.hOD.findUnique({ where: { email } });
    if (existingHod) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    
    let validDepartments: string | any[] = [];
    if (Array.isArray(departmentIds) && departmentIds.length > 0) {
      const departments = await prisma.department.findMany({
        where: { id: { in: departmentIds } }
      });

      const foundIds = new Set(departments.map(d => d.id));
      const missing = departmentIds.filter((id: number) => !foundIds.has(id));
      if (missing.length > 0) {
        return res.status(400).json({
          message: `These department IDs were not found: [${missing.join(', ')}]`
        });
      }

      const wrongCollege = departments.filter(d => d.collegeId !== collegeId);
      if (wrongCollege.length > 0) {
        const badIds = wrongCollege.map(d => d.id);
        return res.status(400).json({
          message: `These departments do not belong to the selected college: [${badIds.join(', ')}]`
        });
      }

      validDepartments = departmentIds.map((id: number) => ({ id }));
    }


    const hashedPassword = await bcrypt.hash(password, 10);

 
    const hod = await prisma.hOD.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone,
        collegeId,
        adminId,
        ...(validDepartments.length > 0 ? {
          departments: {
            connect: validDepartments
          }
        } : {})
      },
      include: { departments: true },
    });

    res.status(201).json({
      message: 'HOD created successfully',
      hod: {
        id: hod.id,
        name: hod.name,
        email: hod.email,
        phone: hod.phone,
        departments: hod.departments,
      },
    });
  } catch (err: any) {
    console.error('Error creating HOD:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};



export const assignDepartmentsToHod = async (req: any, res: any) => {
  const hodId = Number(req.params.hodId);
  const { departmentIds } = req.body;


  if (!Array.isArray(departmentIds) || departmentIds.length === 0) {
    return res.status(400).json({ message: 'Please provide an array of departmentIds' });
  }

  try {
 
    const hod = await prisma.hOD.findUnique({ where: { id: hodId } });
    if (!hod) {
      return res.status(404).json({ message: 'HOD not found' });
    }


    const departments = await prisma.department.findMany({
      where: { id: { in: departmentIds } }
    });

   
    const foundIds = new Set(departments.map(d => d.id));
    const missing = departmentIds.filter((id: number) => !foundIds.has(id));
    if (missing.length > 0) {
      return res.status(400).json({
        message: `These department IDs were not found: [${missing.join(', ')}]`
      });
    }

    const wrongCollege = departments.filter(d => d.collegeId !== hod.collegeId);
    if (wrongCollege.length > 0) {
      const badIds = wrongCollege.map(d => d.id);
      return res.status(400).json({
        message: `These departments do not belong to HOD’s college: [${badIds.join(', ')}]`
      });
    }

 
    const updatedHod = await prisma.hOD.update({
      where: { id: hodId },
      data: {
        departments: {
          connect: departmentIds.map((id: number) => ({ id })),
        },
      },
      include: { departments: true },
    });

    return res.status(200).json({
      message: 'Departments assigned successfully',
      hod: {
        id: updatedHod.id,
        departments: updatedHod.departments
      }
    });
  } catch (err) {
    console.error('Error assigning departments:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


export const getHodById = async (req : any , res : any) => {
  try {
      const id = Number(req.params.id);
      const hod = await prisma.hOD.findUnique({
          where : {id : id },
           include : {
              departments : true ,
              admin : true ,
              college  : true 

           }
      });
      res.status(200).json(hod);

    
}catch(err){
  res.status(404).json({message : "HOD not found"});

}
} 

export const getAllHod = async(req : any
   , res : any ) => {
  try {
    const hods = await prisma.hOD.findMany({
      where : {
        collegeId :Number(req.params.collegeId),
        adminId : Number(req.params.adminId),
       
      },
      include : {
         departments : true ,
         admin : true ,

      }
    }
         
    );
  
      return res.status(200).json(hods);


  }catch(err){
    res.status(404).json({message : "Hod not found"});
  }
}
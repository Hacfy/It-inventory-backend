import { CeateStaffShema } from "../schemas/createStaff.shema";
import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;
import { Request, Response , NextFunction } from 'express';



export const createStaff = async (req: any, res: any) => {
  try {
    const parsed = CeateStaffShema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({error : parsed.error.flatten()})
    }
 
    const  {name, email, password , phone } = req.body;
    if(!name || !email || !password || !phone  ) {
     return res.status(400).json({message : "All are must be required "})
    }
   
    const existing = await prisma.staff.findUnique({where :{email} });
    if(existing) return res.status(400).json({message : "Staff allready Exists"});
 
    const hashedPassword = await bcrypt.hash(password,10);
    const staff = await prisma.staff.create({
     data: {
       name,
       email,
       password: hashedPassword,
       phone,
       collegeId : req.body.collegeId,
       adminId : req.body.adminId
     },
   })
   
    res.status(201).json({message :"Staff crreated successfully" , 
     staff  : {id : staff.id , name : staff.name , email : staff.email , phone : staff.phone}
    })
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}


export const getAllStaff = async (req :any , res : any)=>{
  try{
    const staff = await prisma.staff.findMany({
      select : {id : true , name : true , email :true , phone : true}
    });
    res.status(200).json(staff);
  }catch(err){
    res.status(500).json({message : "Something went wrong"})
  }
}

export const getStaffById = async (req : any , res : any ) =>{
      try{
        const id = Number(req.params.id);
        const staff = await prisma.staff.findUnique({
          where : {id : id}
        });
        if(!staff) return res.status(404).json({message : "Staff not found"});
        res.status(200).json(staff);
      }catch(err){
        res.status(500).json({message : "Something went wrong"})
      }
}
export const deleteStaff = async (req : any , res : any) =>{
  try{
    const id  = Number (req.params.id);
    await prisma.staff.delete({where : {id : id }});
    res.status(200).json({message : "Staff deleted successFully"});

  }catch(err) {
    res.status(500).json({message : "Something went wrong"})
  }
}
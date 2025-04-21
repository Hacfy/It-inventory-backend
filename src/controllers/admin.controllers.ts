import { Request, Response , NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { AdminSignUpSchema, AdminUpdateSchema } from '../schemas/admin.shema'
import { CreateCollegeSchema } from '../schemas/collage.schema';
const prisma = new PrismaClient();
  

export const createAdmin = async (req :any , res : any) =>{
    const parsed = AdminSignUpSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten() });
    }
    const  {name , email , password , phone } = req.body;
    if (!name || !email || !password || !phone) {
        return res.status(400).json({ message : "All deirls are required"});

    }
    const existing = await prisma.admin.findUnique({where : {email}});
    if (existing) return res.status(400).json({message  : "Admin already exists"});

    const hashedPassword = await bcrypt.hash(password , 10 )
    const admin = await prisma.admin.create({
        data : {name , email , password : hashedPassword , phone}
    });
    res.status(201).json({
        message : 'Admin created',
        admin : {id : admin.id , name : admin.name , email : admin.email ,phone : admin.phone}
    });


};


export const updateAdmin= async (req : any , res : any) =>{
    const parsed = AdminUpdateSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten() });
    }
     const id = Number(req.params.id);
     const {name , email, password , phone} = req.body;

     try{
         const data : any = {};
         if (name) data.name = name;
         if (email) data.email = email;
         if (phone) data.phone = phone;
         if (password) data.password =await bcrypt.hash(password , 10);

         const updated = await prisma.admin.update({
            where : {id} , 
            data : data,
         });
         res.status(200).json({message : "Admin updated" , admin :updated});

     }catch(err){
        res.status(400).json({message : "Admin not found"});


     }
}


export const getAllAdmins = async (req : Request , res : Response) =>{
  const admins = await prisma.admin.findMany({
   select : {id  : true , name : true , email :true ,phone : true}
  });
  res.status(200).json(admins);
}




export const getAdminById = async (req : Request , res :any) =>{
    const id = Number(req.params.id);
    const admin = await prisma.admin.findUnique({where : {id}});
    if(!admin) return res.status(404).json({message : "Admin is not FOund"});
    res.json(admin)
}
  



  export const deleteAdmin = async (req : Request , res : Response) =>{
    const id = Number(req.params.id);
    try{
        await prisma.admin.delete({where : {id}});
        res.status(200).json ({message : "Admin deleted Successfully"});

    }catch(err){
        res.status(404).json({message : "Admin not found"})
    }
  }
  

import {z} from "zod";


export const AdminSignUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z.string().min(10).max(15) 
  ,
});
export const AdminUpdateSchema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
    phone: z.string().optional(),
  });
  
export const AdminLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });
  

  
  
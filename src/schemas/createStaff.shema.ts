import {z} from "zod";


export const CeateStaffShema = z.object({
      name : z.string(),
      email : z.string().email(),
      password : z.string().min(6 , "Minimum 6 charector required"),
      phone : z.string().min(10).max(15),
      collegeId: z.number(),
      adminId: z.number(),
});

export const StaffLoginSchema = z.object({
      email : z.string().email(),
      password : z.string().min(4 , "Minimum 4 charector are required")
})
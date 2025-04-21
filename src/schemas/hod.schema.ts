
import {z} from 'zod';



export const HodSignupSchema = z.object({
    name : z.string().min(4 , "Name is required"),
     emial : z.string().email(),
     password : z.string().min(6 , "Strong password is required"),
     phone : z.string().min(10).max(15),
     collegeId : z.number(),
     adminId : z.number(),
     deparrtmentIds : z.array(z.number())
});


export const HodLoginSchema = z.object({
    email : z.string().email(),
    password : z.string().min(6 , "Strong password is required")
})
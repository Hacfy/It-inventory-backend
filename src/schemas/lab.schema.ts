


import {z} from 'zod';

export const LabSchema = z.object({
     name : z.string().min(2 , "Lab name is required"),
     departmentId : z.number()
})
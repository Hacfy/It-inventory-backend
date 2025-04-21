import {z} from 'zod';
export const DepartmentSchema = z.object({
    name : z.string().min(4 , "Dapartment name is required")
})
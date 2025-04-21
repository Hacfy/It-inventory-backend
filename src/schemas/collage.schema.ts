import { z } from 'zod';

export const CreateCollegeSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  collegeId: z.string().optional(), 
});

   

   import {z} from 'zod';

   export const ComponentSchema = z.object({
       name : z.string().min( 3 , "component name is required"),
       type : z.string(),
       brand : z.string().min(2 , "Brand nam eis reuired"),
      
   })
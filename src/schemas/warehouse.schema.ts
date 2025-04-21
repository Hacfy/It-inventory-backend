import {z} from 'zod';



export const WareHouseSchema = z.object({
    name : z.string().min(4 , "Warehouse name is required"),
    warehouseId : z.string().min(1 , "College ID is required"),


})
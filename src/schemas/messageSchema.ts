import {z} from "zod";

export const messageSchema = z.object({
    constent: z.string().min(10,{message:"Content must me atleast of 10 characters"})
    .max(300,{message: "Content must no longer be 300 character"})
    
})
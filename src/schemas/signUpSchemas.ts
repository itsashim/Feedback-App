import {z} from "zod";

const usernamePattern = /^[a-zA-Z0-9]+$/;
export const usenameValidation = z.string().min(2, "Username Must be minimum 2 characters").max(20,"Username must only be maximum 20 characters")
.regex( usernamePattern,"username should not contain speacila characters");

export const signUpSchema = z.object({
    username: z.string(),
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6,{message: "Pasword must be at least 6 characters"})
})
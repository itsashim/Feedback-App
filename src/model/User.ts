import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
    content: string;
    createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        requred: true,
        default: Date.now()
    }
})


export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    message: Message[];
}


const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username is requiree!"],
        trim: true,
        unique: true,
    }, 
    email: {
        type: String,
        required: [true, "Email is required!!"],
        unique: true,
        match:[/^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/, "Please enter valid email"],
    },
    password: {
        type: String,
        required: [true, "Enter you password"],
    },
    verifyCode: {
        type: String,
        requred: [true, "Enter the Verficication Code"]
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify code is requierd"]
    },
    isVerified:{
      type: Boolean,
      defalut: false  
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true
    },
    message: [MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User> ) || mongoose.model<User>("User", UserSchema);

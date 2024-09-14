import mongoose from "mongoose";

type ConnectionOject = {
    isConnected?: number
}

const connection: ConnectionOject = {}

async function dbConnect():Promise<void>{

    if(connection.isConnected){
        console.log("Already connected to database");
        return
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "",{});
        connection.isConnected = db.connections[0].readyState;
        console.log(db)
        console.log("Db connected Successfully");
    } catch (error) {
        console.log("Database connection failed", error);
        process.exit(1);
        // we are doing this because if the db is not connected then 
        // our app will also not run so we exit
    }
}

export default dbConnect;
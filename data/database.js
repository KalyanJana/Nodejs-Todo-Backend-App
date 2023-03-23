import mongoose from "mongoose"

//connecting to data base
export const connectDB = () =>{ 
    mongoose.
        connect(process.env.MONGO_URL,{
            dbName:"backendapi",
        })
        .then(()=>console.log("database connected"))
        .catch(e=>console.log(e))
}
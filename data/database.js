import mongoose from "mongoose"

//connecting to data base
export const connectDB = () =>{ 
    mongoose.
        connect(process.env.MONGO_URL,{
            dbName:"backendapi",
        })
        .then((c)=>console.log(`database connected with ${c.connection.host}`))
        .catch(e=>console.log(e))
}
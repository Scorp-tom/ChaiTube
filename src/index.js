// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 8000

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is listeing on Port ${PORT}`)
    })
})
.catch((err)=>{
    console.log("MangoDB Connection Failed !!", err)
})








/*
import express from "express";
const app = express()


;( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error" , (error)=>{
            console.log("ERROR :", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } 
    catch (error) {
        console.error("ERROR :", error)
        throw err
    }
})()

*/
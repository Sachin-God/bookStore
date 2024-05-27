import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const uri = process.env.URI

export default function databaseConnection () {
    mongoose.connect(uri
    ).then(() => {
        console.log("Mongodb Connected")
    }).catch((error)=>{
        console.log(error);
    })
}
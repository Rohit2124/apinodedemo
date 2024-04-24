import express,{Express,Request,Response}from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose,{Schema,Model,Document} from 'mongoose'; 
import Todo_router from "./routes/Todo_router";

dotenv.config();
const app:Express=express();
const port=process.env.PORT ||4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.get('/',(req:Request,res:Response)=>{
    res.send('Express + Typescript Server');
});
app.use('/api/todo',Todo_router);
mongoose.connect("mongodb://localhost:27017/tododb",{
});
app.listen(port,()=>{
    console.log('[server]:server is running at http://localhost:$(4000)')
});
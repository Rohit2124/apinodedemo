import { create } from 'domain';
//import { update } from 'domain';
//import { delete } from 'domain';
import{Request} from "express";
import todo from '../model/todomodel';
import{request} from "http";


class TodoService{

    body:Request['body'];
    params:Request['params'];

    constructor(req:Request){
        this.body = req.body;
        this.params = req.params;

    }
        getAll = async()=> {

            const todos = await todo.find();

            return todos;

        }
            create= async () => {

                const todos=await todo.create(this.body);

                return todos;
            }
           update= async () => {

                const todos=await todo.updateOne(this.body,{
                    where:{
                        id:this.params.id,
                    },
                })

                return todos;
            }
            delete= async () => {

                const todos=await todo.deleteOne({
                     where:{
                        id:this.params.id,
                },

            });

                return todos;
            }

        }
        export default TodoService;
    

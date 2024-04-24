import{ Request,Response} from "express";
import IController from "./Controllerinterface";
import TodoService from "./Todo_service";

class TodoController implements IController{

    index=async(req:Request,res:Response):
    Promise<Response> =>{
        try{
            const service:TodoService=new TodoService(req);
            const todos=await service.getAll();
            return res.send(todos);
        }catch(error){
            return res.send(error)
        }
    }
    create=async(req:Request,res:Response):
    Promise<Response> =>{
        try{
            const service:TodoService=new TodoService(req);
            const todo=await service.create();
            console.log(todo);
            return res.send({data: todo,
                message:"Create Todo Success"
            })
        }catch(error){
            return res.send(error)
        }
    }
   update=async(req:Request,res:Response):
    Promise<Response> =>{
        try{
            const service:TodoService=new TodoService(req);
            const todo=await service.update();
            return res.send({
                message:"Update Todo Success"
            })
        }catch(error){
            return res.send(error)
        }
    }
    delete=async(req:Request,res:Response):
    Promise<Response> =>{
        try{
            const service:TodoService=new TodoService(req);
            const todo=await service.delete();
            return res.send({
                message:"Delete Todo Success"
            })
        }catch(error){
            return res.send(error)
        }
    }
}
export default new TodoController;
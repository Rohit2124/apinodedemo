import BaseRouter from "./Base_router";
import TodoController from '../controllers/Todo_controller';

class TodoRouter extends BaseRouter{
    public routes():void{
        this.router.get('/',TodoController.index);
        this.router.post('/',TodoController.create);
        this.router.post('/',TodoController.update);
        this.router.post('/',TodoController.delete);
       
    }
}
export default new TodoRouter().router;
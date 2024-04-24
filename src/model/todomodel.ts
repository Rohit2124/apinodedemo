import mongoose, {Schema, Model, Document} from 'mongoose';

const Todoschema: Schema = new Schema({
    task: {type: String, require: true},
    description: {type: String, required: true},
    taskDate: {type: String, required: true},
    status: {type: Boolean, required: true},
});

interface ITodo extends Document {
    task: String
    description: String;
    taskDate: Date;
    status: boolean;
}

const Todo: Model<ITodo> = mongoose.model<ITodo>
('Todo',Todoschema);

export default Todo;
import { Schema, Types, model } from "mongoose";

interface ITodo {
  todo: string;
  dueDate: Date;
  completed: boolean;
}

const todoSchema = new Schema<ITodo>({
  todo: {
    type: String,
    required: [true, "Please provide a todo!"],
  },
  dueDate: {
    type: Date,
    required: [true, "Please provide a due date!"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = model("Todo", todoSchema);

export default Todo;

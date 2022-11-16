import { RequestHandler } from "express";
import Todo from "../models/todo";

export const createTodo: RequestHandler = async (req, res, next) => {
  const { todo, dueDate, completed } = req.body;
  const myTodo = new Todo({
    todo,
    dueDate: new Date(dueDate).toISOString(),
    completed,
  });
  await myTodo.save();
  res.status(201).json({
    message: "Todo created successfully.",
    todo: myTodo,
  });
};

export const getTodos: RequestHandler = async (req, res, next) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({
      count: todos.length,
      todos,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  const { todo, dueDate, completed } = req.body;
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {
    todo,
    dueDate,
    completed,
  });
  res.status(200).json({
    message: "Todo Updated Successfully.",
  });
};

export const deleteTodo: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "Todo deleted successfully.",
  });
};

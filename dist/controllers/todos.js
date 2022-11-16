"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = __importDefault(require("../models/todo"));
const createTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { todo, dueDate, completed } = req.body;
    const myTodo = new todo_1.default({
        todo,
        dueDate: new Date(dueDate).toISOString(),
        completed,
    });
    yield myTodo.save();
    res.status(201).json({
        message: "Todo created successfully.",
        todo: myTodo,
    });
});
exports.createTodo = createTodo;
const getTodos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.default.find({});
        res.status(200).json({
            count: todos.length,
            todos,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { todo, dueDate, completed } = req.body;
    const updatedTodo = yield todo_1.default.findByIdAndUpdate(req.params.id, {
        todo,
        dueDate,
        completed,
    });
    res.status(200).json({
        message: "Todo Updated Successfully.",
    });
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield todo_1.default.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message: "Todo deleted successfully.",
    });
});
exports.deleteTodo = deleteTodo;

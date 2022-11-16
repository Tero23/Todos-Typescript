"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const todoSchema = new mongoose_1.Schema({
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
const Todo = (0, mongoose_1.model)("Todo", todoSchema);
exports.default = Todo;

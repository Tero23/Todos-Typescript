"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectToMongo_1 = __importDefault(require("./connection/connectToMongo"));
const todos_1 = __importDefault(require("./routes/todos"));
(0, connectToMongo_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/todos", todos_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
    });
});
app.listen(3000, () => {
    console.log("Server is running at port 3000.");
});

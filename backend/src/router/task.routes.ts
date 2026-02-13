import {Router} from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { createTask, getTask, getTaskByid, deleteTask, updateTask } from "../controller/task.controller.js";

const taskRouter = Router();

taskRouter.use(authMiddleware);
taskRouter.post("/", createTask);
taskRouter.get("/", getTask);
taskRouter.get("/:id", getTaskByid);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);

export default taskRouter;

import { Response } from "express";
import { Task } from "../models/Task.js";

// Create Task
export const createTask = async (req: any, res: Response) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;

    const task = await Task.create({
      title,
      description,
      user: userId,
    });

    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "task creation failed" });
  }
};

// Get all tasks
export const getTask = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;

    if (req.user.role === "admin") {
      const tasks = await Task.find().populate("user", "email");
      return res.status(200).json(tasks);
    } else {
      const tasks = await Task.find({ user: userId });
      return res.status(200).json(tasks);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "failed to get tasks" });
  }
};

// Get single task
export const getTaskByid = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;
    const taskId = req.params.id;

    let task;

    if (req.user.role === "admin") {
      task = await Task.findById(taskId);
    } else {
      task = await Task.findOne({ _id: taskId, user: userId });
    }

    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "failed to get task by id" });
  }
};

// Update task
export const updateTask = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;
    const taskId = req.params.id;

    let task;

    if (req.user.role === "admin") {
      task = await Task.findByIdAndUpdate(taskId, req.body, { new: true });
    } else {
      task = await Task.findOneAndUpdate(
        { _id: taskId, user: userId },
        req.body,
        { new: true }
      );
    }

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "task update failed" });
  }
};

// Delete task
export const deleteTask = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;
    const taskId = req.params.id;

    let task;

    if (req.user.role === "admin") {
      task = await Task.findByIdAndDelete(taskId);
    } else {
      task = await Task.findOneAndDelete({
        _id: taskId,
        user: userId,
      });
    }

    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }

    res.status(200).json({ message: "task deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "task deletion failed" });
  }
};

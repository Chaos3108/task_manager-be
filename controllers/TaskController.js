const TaskService = require("../services/TaskService");

const createTask = async (req, res) => {
  try {
    const task = await TaskService.createTask(req, res);
    if (!task) {
      return res.status(400).json({ message: "Task creation failed" });
    }
    return res.status(201).json({ message: "Task created successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const tasks = await TaskService.getTask(req, res);
    if (!tasks) {
      return res.status(404).json({ message: "No tasks found" });
    }
    return res
      .status(200)
      .json({ message: "Tasks retrieved successfully", tasks });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const getTaskbyDate = async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) {
      return res
        .status(400)
        .json({ error: "Date query parameter is required" });
    }
    const tasks = await TaskService.getTasksByDate(date);
    if (!tasks) {
      return res.status(404).json({ message: "No tasks found" });
    }
    return res
      .status(200)
      .json({ message: "Tasks retrieved successfully", tasks });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
module.exports = { createTask, getTask, getTaskbyDate };

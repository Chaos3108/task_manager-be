const TaskSchema = require("../models/TaskSchema");
const Task = require("../models/TaskSchema");
const moment = require("moment");
const createTask = async (req, res) => {
  try {
    const { task_title, task_description, task_day, task_time } = req.body;
    const taskDateTime = moment(`${task_day} ${task_time}`, "YYYY-MM-DD HH:mm");
    if (!taskDateTime.isValid()) {
      throw new Error("Invalid task_day or task_time format.");
    }
    const task = new Task({
      task_title,
      task_description,
      task_day,
      task_time: taskDateTime.toDate(),
    });
    const response = await task.save();
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const getTask = async (req, res) => {
  try {
    const tasks = await Task.find();

    const groupTasks = tasks.reduce((acc, task) => {
        const day = moment(task.task_day).format("dddd"); // Get the day of the week
        if (!acc[day]) {
          acc[day] = [];
        }
        acc[day].push(task); 
        return acc;
      }, {});
  

      const result = Object.keys(groupTasks).map((day) => ({
        day, 
        tasks: groupTasks[day], 
      }));
    return groupTasks;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createTask, getTask };

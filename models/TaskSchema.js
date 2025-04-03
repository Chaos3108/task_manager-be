const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    task_title: {
        type: String,
        required: true,
    },
    task_description: {
        type: String,
        required: true,
    },
    task_status: {
        type: String,
        enum: ["pending", "in-progress", "completed"],
        default: "pending",
    },
    task_day: {
        type: String,
        required: true,
    },
    task_time:{
        type: Date,
        required: true,
    },
    task_created_at: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);
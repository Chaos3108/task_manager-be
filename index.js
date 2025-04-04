const express = require("express");
require("dotenv").config();
const dbConnect = require("./db");
const cors = require("cors");
const app = express();
const TaskRouter = require("./routes/TaskRouter");
app.use(cors())
app.use(express.json());
dbConnect();
app.get("/", (req, res) => {
  res.send("Server working 🔥");
});
app.use("/tasks", TaskRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

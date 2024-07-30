// Node Js Setup

// const { createServer } = require("node:http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// Express Js SetUp

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const practiceRoutes = require("./routes/practice");
const studentRoutes = require("./routes/student");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/practice", practiceRoutes);
app.use("/api/student", studentRoutes);

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "NodeDemo",
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`server is running at PORT ${PORT}`);
    });
  })
  .catch((e) => console.log(e));

// app.get("/", (req, res) => {
//   res.send("Hello World!......");
// });

const express = require("express");
const cors = require("cors");
const body = require("body-parser")

const server = express();
const PortServer = 4000;

const taskRoutes = require("./routes/routes");
const morgan = require("morgan");

server.use(morgan("dev"));
server.use(cors())
server.use(taskRoutes);
server.use(body.json());  

server.listen(PortServer, () => {
  console.log("Server on port " + PortServer);
});
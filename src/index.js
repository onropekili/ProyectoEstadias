const express = require("express");

const server = express();
const PortServer = 4000;

const taskRoutes = require("./routes/routes");

const morgan = require("morgan");

server.use(morgan("dev"));
server.use(taskRoutes);

server.listen(PortServer, () => {
  console.log("Server on port " + PortServer);
});

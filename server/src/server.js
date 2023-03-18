const http = require("http");
const { app } = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

const startServer = () => {
  server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
};

startServer();
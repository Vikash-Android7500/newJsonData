const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
require("dotenv").config();

let portNo = process.env.PORT || 8000;

server.use(middlewares);
server.use(router);
server.listen(portNo, () => {
  console.log(`JSON Server is running ${portNo} (-_-)...+`);
});

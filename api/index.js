const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
require("dotenv").config();

let portNo = process.env.PORT || 4000;

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/blog/:resource/:id/show": "/:resource/:id",
  })
);

server.use(router);
server.listen(portNo, () => {
  console.log(`JSON Server is running ${portNo} (-_-)`);
});


// Export the Server API
module.exports = server
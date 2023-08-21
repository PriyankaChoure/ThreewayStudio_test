const app = require("./app");
const PORT = 8082;
let server;

server = app.listen(PORT, () => {
  console.log("listing to port", PORT);
});

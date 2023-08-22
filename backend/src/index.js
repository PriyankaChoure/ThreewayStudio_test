const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;
console.log(config.mongoose);
// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    console.log("Connected to Mongodb");
    server = app.listen(config.PORT, () => {
      console.log("listing to port", config.PORT);
    });
  })
  .catch();

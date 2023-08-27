const mongoose = require("mongoose");
const app = require("./app");
const http = require("http");
const config = require("./config/config");
const { Server } = require("socket.io");
const httpServer = http.createServer(app);
let server;
console.log(config.mongoose);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// io.on("connection", (socket) => {
//   console.log("user connected - ", socket.id);

//   socket.on("join_meet", (meetID) => {
//     socket.join(meetID);
//     console.log(`User with ${socket.id} has joined the meet : ${meetID}`);
//   });

//   socket.on("send_message", (message) => {
//     socket.to(message.room).emit("receive_message", message);
//   });

//   socket.on("disconnect", () => {
//     console.log("User Disconnected", socket.id);
//   });
// });

//  Create Mongo connection and get the express app to listen on config.port
mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    console.log("Connected to Mongodb");
    server = app.listen(config.PORT, () => {
      console.log("listing to port", config.PORT);
    });
  })
  .catch();

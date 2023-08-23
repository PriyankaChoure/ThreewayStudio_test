const express = require("express");
// const compression = require("compression");
// const helmet = require("helmet");
const cors = require("cors");
const httpStatus = require("http-status");
const routes = require("./routes/");
const app = express();

// set security HTTP headers - https://helmetjs.github.io/
// app.use(helmet());

// enable cors
app.use(
  cors({
    origin: ["*"],
    methods: "*",
    credentials: true,
  })
);
// app.options("*", cors());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
// app.use(compression());

app.use("/backend", routes);

module.exports = app;

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRouter = require("./routers/users");
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routers
app.use("/users", userRouter);

// Start Server
const PORT = process.env.PORT || 3000;

// eslint-disable-next-line no-console
app.listen(PORT, console.log(`http://localhost:${PORT}`));




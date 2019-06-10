/* eslint-disable no-console */
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRouter = require("./routers/users");

const app = express();
const db = require("./config/key").mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then( () => console.log("MongoDB Connected..."))
    .catch( err => console.log(err));
    
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routers
app.use("/users", userRouter);

// Start Server
const PORT = process.env.PORT || 3000;

// eslint-disable-next-line no-console
app.listen(PORT, console.log(`http://localhost:${PORT}`));




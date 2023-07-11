const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// routes
const postRouter = require("./routes/posts");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(postRouter);
app.listen(4000)
console.log("hiiii")

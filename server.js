// Require Express to run server and routes
const express = require("express");
/* BodyParser is a middleware that parses the body of the request. */
const bodyParser = require("body-parser");
/* A middleware that allows cross-origin requests. */
const cors = require("cors");

/* Creating an instance of the express function. */
const app = express();

/* A middleware that parses the body of the request. */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* It allows cross-origin requests. */
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

let projectData = {};

app.get("/", (req, res) => {
  res.send(projectData);
});

app.post("/", addData);

function addData(req, res) {
  projectData = req.body;
  res.send(projectData);
  console.log(projectData);
}

// Setup Server
let port = 3000;
localhost = "127.0.0.1";

app.listen(port, () => {
  console.log(`Server is running on http://${localhost}:${port}`);
});

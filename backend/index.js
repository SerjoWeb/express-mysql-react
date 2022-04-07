/** Initialize Express */
const express = require("express");

/** Initialize App */
const app = express();

/** Initialize Port */
const port = 5050;

/** Initialize requests router */
const requests = require("./routes/requests");

/** Initialize CORS */
const cors = require('cors');

/** Allow CORS */
app.use(cors());

/** Use JSON format */
app.use(express.json());

/** Middleware to parse the URL encoded body */
app.use(
  express.urlencoded({
    extended: true,
  })
);

/** GET Request to a root path */
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

/** Add Requests path, route */
app.use("/requests", requests);

/** Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

/** Start listening app on port */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

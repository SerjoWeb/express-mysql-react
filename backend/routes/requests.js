/** Initialize Express */
const express = require("express");

/** Initialize Router */
const router = express.Router();

/** Initialize requests service */
const requests = require("../services/requests");

/** GET requests, async get request */
router.get("/", async (req, res, next) => {
  try {
    /**get User IP */
    const userIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    res.json(await requests.getRequests(userIP));
  } catch (err) {
    console.error(`Error while getting requests `, err.message);
    next(err);
  }
});

/* POST request to create a new request */
router.post("/", async function (req, res, next) {
  try {
    /**get User IP */
    const userIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    res.json(await requests.createRequest(userIP, req.body));
  } catch (err) {
    console.error(`Error while creating requests`, err.message);
    next(err);
  }
});

/** Export Module */
module.exports = router;

/** Initialize DB */
const db = require("./db");

/** Initialize Helper */
const helper = require("../helper");

/** Async get method to get requests with pagination */
const getRequests = async (userIP) => {
  /** Query to DB */
  const rows = await db.query(`SELECT * FROM requests WHERE ip = "${userIP}"`);

  /** Data with checking on empty rows */
  const data = helper.emptyOrRows(rows);

  /** Return an Object with data and meta */
  return {
    data,
  };
};

/** Async Post method to get create a request */
const createRequest = async (userIP, request) => {
  /** Fibo constants */
  const SQRT5 = Math.sqrt(5);
  const PHI = (SQRT5 + 1) / 2;

  /** Fibo get calculated value from N */
  const fibo = (n) => {
    return Math.pow(PHI, n) / SQRT5 + 0.5;
  };

  /** Query to DB */
  const result = await db.query(
    `INSERT INTO requests(ip, user_value, counted_value, date) VALUES ("${userIP}", ${parseInt(
      request.value
    )}, ${fibo(parseInt(request.value))}, NOW());`
  );

  /** Initizlize returned object */
  const feedback = {
    message: "Error in creating request",
  };

  /** Get date time now */
  const today = new Date();
  const date = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;
  const time = `${today.getHours()}:${today.getMinutes()}`;
  const dateTime = `${date} ${time}`;

  /** Check if request was successfull and change the feedback obj */
  if (result.affectedRows) {
    feedback.message = "Request created successfully";
    feedback.body = {
      id: result.insertId,
      ip: userIP,
      user_value: parseInt(request.value),
      counted_value: fibo(request.value),
      date: dateTime,
    };
  }

  /** Return an Object - feedback */
  return { feedback };
};

/** Export Module */
module.exports = {
  getRequests,
  createRequest,
};

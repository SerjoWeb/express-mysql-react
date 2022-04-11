/** Initialize mysql */
const mysql = require("mysql2/promise");

/** Initialize config */
const config = require("../config");

/** Async query to a DB */
const query = async (sql, params) => {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute(sql, params);

  return results;
};

/** Export Modules */
module.exports = {
  query,
};

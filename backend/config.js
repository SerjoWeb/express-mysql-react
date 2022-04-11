/** Initialize config to connect to MySQL DB including pagination param */
const config = {
  db: {
    host: "localhost",
    user: "root",
    password: "",
    database: "test_requests",
  },
  listPerPage: 10,
};

/** Export module Config */
module.exports = config;

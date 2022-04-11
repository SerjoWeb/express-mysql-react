/** If Empty rows just return an empty array */
const emptyOrRows = (rows) => {
  if (!rows) {
    return [];
  }

  return rows;
};

/** Module exports: functions */
module.exports = {
  emptyOrRows,
};

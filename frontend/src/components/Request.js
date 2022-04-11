/** Import PropTypes to strict the types of the props */
import PropTypes from "prop-types";

/** Import Moment for date converting */
import Moment from "moment";

/** Request item component */
const Request = ({ request }) => {
  return (
    <div className="request-item">
      <p>IP Address: {request.ip}</p>
      <p>User value: {request.user_value}</p>
      <p>Counted value: {request.counted_value}</p>
      <p>Datetime: {Moment(request.date).format("DD-MM-YYYY HH:SS")}</p>
    </div>
  );
};

/** Set a type of the props and set up them as a required */
Request.propTypes = {
  request: PropTypes.object.isRequired,
};

/** Export module */
export default Request;

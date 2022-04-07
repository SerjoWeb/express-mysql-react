/** Import PropTypes to strict the types of the props */
import PropTypes from 'prop-types';

/** Import Moment for date converting */
import Moment from 'moment';

/** Import Add Request Form Component */
import AddRequestForm from '../components/AddRequestForm';

/** Set a type of the props and set up them as a required */
const AddRequest = ({request, addRequestFunction}) => {
  return (
    <>
      <h1>Enter a number and get counted value</h1>
      <AddRequestForm addRequestFunction={addRequestFunction} />

      {
        Object.keys(request).length !== 0 &&
          <div className="new-request">
            <p>IP Address: {request.ip}</p>
            <p>User value: {request.user_value}</p>
            <p>Counted value: {request.counted_value}</p>
            <p>Datetime: {Moment(request.date).format('DD-MM-YYYY HH:SS')}</p>
          </div>
      }
    </>
  )
};

/** Set a type of the props and set up them as a required */
AddRequest.propTypes = {
  request: PropTypes.object.isRequired,
  addRequestFunction: PropTypes.func.isRequired
};

/** Export add request component */
export default AddRequest;

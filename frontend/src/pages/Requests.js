/** Import PropTypes to strict the types of the props */
import PropTypes from 'prop-types';

/** Import Request List Component */
import RequestList from '../components/RequestList';

/** Create request list component */
const Requests = ({requests}) => {
  return (
    <RequestList requests={requests} />
  )
}

/** Set a type of the props and set up them as a required */
Requests.propTypes = {
  requests: PropTypes.array.isRequired
};

/** Export request list component */
export default Requests;

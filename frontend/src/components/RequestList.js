/** Import PropTypes to strict the types of the props */
import PropTypes from "prop-types";

/** Import UI Material components */
import { Box } from "@mui/material";

/** Import component Request */
import Request from "./Request";

/** RequestList component */
const RequestList = ({ requests }) => {
  return (
    <>
      <h1>List of the Requests / history</h1>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          minWidth: "300px",
          maxWidth: "920px",
          height: "auto",
          border: "thin solid #ccc",
          borderRadius: "2px",
          marginTop: "30px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "15px",
        }}
      >
        <div className="request-list">
          {requests !== undefined || requests.length > 0
            ? requests.map((request) => (
                <Request key={request.id} request={request} />
              ))
            : "There are no requests yet!"}
        </div>
      </Box>
    </>
  );
};

/** Set a type of the props and set up them as a required */
RequestList.propTypes = {
  requests: PropTypes.array.isRequired,
};

/** Export Module */
export default RequestList;

/** Import global styles */
import "./index.css";

/** Use react hook for operating state and incoming data from server */
import { useState, useEffect } from "react";

/** Import React Router */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/** Import UI Material components */
import { Container } from "@mui/material";

/** Import Components, Pages and etc. */
import AddRequest from "./pages/AddRequest";
import Requests from "./pages/Requests";

/** Create main entry component */
const App = () => {
  /** API Server URL */
  const serverURL = "http://localhost:5050/requests";

  /** Initialize a requests from server */
  const [requests, setRequests] = useState([]);

  /** Initialize a just added request state */
  const [request, setRequest] = useState({});

  /** Fetch data using useEffect react hook and set the state */
  useEffect(() => {
    const getRequests = async () => {
      const requests = await GETRequests();

      setRequests(requests);
    };

    getRequests();
  }, []);

  /** fetch requests function */
  const GETRequests = async () => {
    const res = await fetch(serverURL, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    });
    const data = await res.json();

    return data;
  };

  /** Add request */
  const POSTRequest = async (request) => {
    /** sety type int for an entered number */
    const newRequest =
      typeof request !== "number" ? parseInt(request) : request;

    /** Check the entered number */
    if (newRequest > 0) {
      /** push POST request to create a new request */
      const res = await fetch(serverURL, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          "Content-type": "application/json",
        },
        body: JSON.stringify({ value: request }),
      });

      /** data from server */
      const data = await res.json();

      /** Check if response is valid and set stores */
      if (data.feedback) {
        if (data.feedback.body) {
          setRequest(data.feedback.body);

          if (requests.data) {
            setRequests([...requests.data, data.feedback.body]);
          }
        } else {
          alert("Server Error, please try again later.");
        }
      } else {
        alert("Server Error, please try again later.");
      }
    } else {
      alert("Number has to be positive and greater than zero!");
      return;
    }
  };

  return (
    <Router>
      <Container maxWidth="xl">
        <nav className="nav-bar">
          <a href="/">Home</a>|<a href="/requests">Request List</a>
        </nav>

        <Routes>
          <Route
            path="/"
            exact
            element={
              <AddRequest request={request} addRequestFunction={POSTRequest} />
            }
          />
          <Route
            path="/requests"
            element={<Requests requests={requests.data ? requests.data : []} />}
          />
        </Routes>
      </Container>
    </Router>
  );
};

/** Export main entry component */
export default App;

import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";
import Poll from "./Poll";
import PollCreationPage from "./Poll-creation-page";
import LeaderBoardPage from "./Leader-board-page";
import { Routes, Route, useLocation,useNavigate } from "react-router-dom";

const App = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  useEffect(() => {
    // Redirect to login if not authenticated and not already on the login page
    if (!props.authedUser && location.pathname !== "/login") {
      navigate("/login");
    }
  }, [props.authedUser, location.pathname, navigate]);

  return (
    <Fragment>
      <LoadingBar />
      {location.pathname !== "/login" && <Nav />}
      <div className="container">
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/poll/:id" element={<Poll />} />
            <Route path="/add" element={<PollCreationPage />} />
            <Route path="/leaderboard" element={<LeaderBoardPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
  // loading: authedUser === null, // Consider loading state if authedUser is being set asynchronously
});

export default connect(mapStateToProps)(App);

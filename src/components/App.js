import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";
import Poll from "./Poll";
import Protected from "./Protected";
import PollCreationPage from "./Poll-creation-page";
import LeaderBoardPage from "./Leader-board-page";
import { Routes, Route, useLocation } from "react-router-dom";

const App = (props) => {
  const location = useLocation();
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  useEffect(() => {}, []);

  return (
    <Fragment>
      <LoadingBar />
      {location.pathname !== "/login" && <Nav />}
      <div className="container">
        {props.loading === true ? null : (
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
            <Route
              path="/poll/:id"
              element={
                <Protected>
                  <Poll />
                </Protected>
              }
            />
            <Route
              path="/add"
              element={
                <Protected>
                  <PollCreationPage />
                </Protected>
              }
            />
            <Route
              path="/leaderboard"
              element={
                <Protected>
                  <LeaderBoardPage />
                </Protected>
              }
            />
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

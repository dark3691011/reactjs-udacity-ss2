import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Nav from "./Nav";
import Home from './Home';
import Poll from './Poll';
import PollCreationPage from './Poll-creation-page';
import LeaderBoardPage from './Leader-board-page'
import { Routes, Route,useLocation } from "react-router-dom";


const App = (props) => {
  const location = useLocation();
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      {location.pathname !== '/login' && <Nav />}
      <div className="container">
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/poll/:id" element={<Poll />} />
            <Route path="/new" element={<PollCreationPage />} />
            <Route path="/board" element={<LeaderBoardPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);

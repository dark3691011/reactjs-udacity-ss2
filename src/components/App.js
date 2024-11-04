import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Nav from "./Nav";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <Nav />
      <div className="container">
        <Login />
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);

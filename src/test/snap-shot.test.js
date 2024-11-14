import * as React from "react";
import { render } from "@testing-library/react";
import Login from "../components/Login";
import middleware from "../middleware";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer, middleware);

describe("Greetings", () => {
  it("matches the snapshot when a name is passed", () => {
    var component = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});

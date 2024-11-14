import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../components/App";
import reducer from "../reducers";
import middleware from "../middleware";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer, middleware);
test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  screen.debug();
});

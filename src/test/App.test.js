import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../components/App";
import reducer from "../reducers";
import middleware from "../middleware";
import { createStore } from "redux";
import { MemoryRouter } from "react-router";

const store = createStore(reducer, middleware);
test("renders learn react link", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
  screen.debug();
});

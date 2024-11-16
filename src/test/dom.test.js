import * as React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "../components/Login";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
const store = createStore(reducer, middleware);
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import "@testing-library/jest-dom";
describe("Login", () => {
  it("will display an error if password empty", async () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    var select = component.getByTestId("username");
    fireEvent.change(select, { target: { value: "sales" } });
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(component.getByTestId("error-message")).toBeInTheDocument();
    });
  });
});

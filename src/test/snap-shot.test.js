import * as React from "react";
import { render } from "@testing-library/react";
import Login from "../components/Login";
import PollCreationPage from "../components/Poll-creation-page";
import Home from "../components/Home";
import LeaderBoardPage from "../components/Leader-board-page";
import middleware from "../middleware";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import { MemoryRouter } from "react-router";

const store = createStore(reducer, middleware);

describe("Login", () => {
  it("matches the snapshot when a name is passed", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("PollCreationPage", () => {
  it("matches the snapshot when a name is passed", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <PollCreationPage />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("Home", () => {
  it("matches the snapshot when a name is passed", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("LeaderBoardPage", () => {
  it("matches the snapshot when a name is passed", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <LeaderBoardPage />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});

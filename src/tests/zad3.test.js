import React from "react";
import {render, cleanup} from "react-testing-library";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

import reducer from "../redux/reducer";
import { add } from "../redux/actions";
import List from "../containers/List";

describe("Zadanie 3", () => {

  afterEach(cleanup);

  describe("<List> container", () => {

    let store;

    const FakeComponent = ({ store }) => (
      <Provider store={store}>
        <List />
      </Provider>
    );

    beforeEach(() => {
      store = createStore(reducer, applyMiddleware(thunk));
    });

    it("renders list of items", () => {
      const { container } = render(<FakeComponent store={store} />);

      store.dispatch(add("first"));
      store.dispatch(add("second"));

      const text = ["first", "second"];

      container.querySelectorAll("li").forEach((el, index) => {
        expect(el.innerHTML).toContain(`<span>${text[index]}</span>`)
      })
    });
  });
});

import React from "react";
import {render, cleanup} from "react-testing-library";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

import reducer from "../redux/reducer";
import { add } from "../redux/actions";
import List from "../containers/List";

describe("Zadanie 4", () => {

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
      const { getByText } = render(<FakeComponent store={store} />);

      store.dispatch(add("first"));

      getByText("first").click();

      expect(store.getState().todos).toEqual([{ title: "first", done: true }]);
      expect(getByText("first").parentElement.style.textDecoration).toEqual("line-through")
    });
  });
});

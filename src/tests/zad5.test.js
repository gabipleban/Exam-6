import React from "react";
import {render, cleanup} from "react-testing-library";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

import reducer from "../redux/reducer";
import { add } from "../redux/actions";
import List from "../containers/List";

describe("Zadanie 5", () => {

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

    it("removes element after click on Usuń", () => {
      const { getByText } = render(<FakeComponent store={store} />);

      store.dispatch(add("first"));
      expect(store.getState().todos).toEqual([{ title: "first", done: false }]);

      getByText("Usuń").click();
      expect(store.getState().todos).toEqual([]);
    });
  });
});

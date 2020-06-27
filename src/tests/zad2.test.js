import React from "react";
import {render, cleanup, fireEvent} from "react-testing-library";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

import reducer from "../redux/reducer";
import { TODO_ADDED, add } from "../redux/actions";
import Form from "../containers/Form";

describe("Zadanie 2", () => {

  afterEach(cleanup);

  describe("actions.js", () => {
    it("TODO_ADDED action should be defined", () => {
      expect(typeof TODO_ADDED).toBe("string");
    });

    it("add action creator should be defined", () => {
      expect(typeof add).toBe("function");
      expect(add("title")).toEqual({ type: TODO_ADDED, payload: "title" });
    });
  });

  describe("reducer", () => {
    it("should have initial state = []", () => {
      expect(reducer(undefined, {}).todos).toEqual([]);
    });

    it("should add new item to list on TODO_ADDED", () => {
      expect(reducer(undefined, add("title")).todos).toEqual([{ title: "title", done: false }]);
    });
  });

  describe("<Form> container", () => {

    let store;

    const FakeComponent = ({ store }) => (
      <Provider store={store}>
        <Form />
      </Provider>
    );

    beforeEach(() => {
      store = createStore(reducer, applyMiddleware(thunk));
    });

    it("adds todo item to store", () => {
      const { container } = render(<FakeComponent store={store} />);

      const form = container.querySelector("form");

      fireEvent.submit(form, {
        target: {
          todoName: {
            value: "title"
          }
        }
      });

      expect(store.getState().todos).toEqual([{ title: "title", done: false }]);
    });
  });
});

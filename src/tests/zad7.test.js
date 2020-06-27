import React from "react";
import {render, cleanup, fireEvent} from "react-testing-library";

import App from "../components/App";

describe("Zadanie 7", () => {

  afterEach(cleanup);

  function addItem(title, form) {
    fireEvent.submit(form, {
      target: {
        todoName: {
          value: title
        }
      }
    });
  }

  it("removes element after 2 seconds", () => {
    jest.useFakeTimers();

    const { container, getByText, queryByText } = render(<App/>);
    const form = container.querySelector("form");
    addItem("first", form);

    getByText("Usuń po 2s").click();

    expect(getByText("first")).not.toBe(null);

    jest.runOnlyPendingTimers();

    expect(queryByText("first")).toBe(null);
  });
});

import React from "react";
import {render, cleanup, fireEvent} from "react-testing-library";

import App from "../components/App";

describe("Zadanie 6", () => {

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

  it("filters elements by clicking on link", () => {
      const { container, getByText, queryByText } = render(<App/>);
      const form = container.querySelector("form");

      // Add two items
      addItem("first", form);
      addItem("second", form);

      getByText("first").click();

      getByText("Done").click();
      expect(container.querySelectorAll("li span").length).toEqual(1);
      expect(getByText("first")).not.toBe(null);
      expect(queryByText("second")).toBe(null);

      getByText("Not-Done").click();
      expect(container.querySelectorAll("li span").length).toEqual(1);
      expect(getByText("second")).not.toBe(null);
      expect(queryByText("first")).toBe(null);

      getByText("All").click();
      expect(container.querySelectorAll("li span").length).toEqual(2);
      expect(getByText("first")).not.toBe(null);
      expect(getByText("second")).not.toBe(null);
  });
});

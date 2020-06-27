import React from "react";
import {render, cleanup} from "react-testing-library";

import Main from "../components/Main";
import App from "../components/App";

jest.mock("../components/Main");

describe("Zadanie 1", () => {

  afterEach(cleanup);

  beforeEach(() => {
    Main.mockImplementation(() => <div/>);
  });

  it("renders Main component with param filter", () => {
    window.location.hash = "#/done";

    render(<App/>);

    expect(Main.mock.calls[0][0].match.params).toEqual({
      filter: "done"
    });
  });

  it("renders links", () => {
    const url = ["/", "/done", "/not-done"];
    const text = ["All", "Done", "Not-Done"];

    const { container } = render(<App/>);

    container.querySelectorAll("a").forEach((el, index) => {
      expect(el.innerHTML).toContain(text[index]);
      expect(el.href).toContain(url[index]);
    });
  });

  it("active link should be styled", () => {
    window.location.hash = "#/done";

    const { getByText } = render(<App/>);

    expect(getByText("Done").style.color).toEqual("red");
    expect(getByText("Done").style.fontWeight).toEqual("bold");
  });

  it("renders NotFound in case of wrong url", () => {
    window.location.hash = "#/to/nie/jest/poprawna/ścieżka";

    const { getByText } = render(<App/>);

    expect(getByText("404 - nie znaleziono strony")).not.toBe(null);
  })

});

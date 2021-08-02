import { render, fireEvent } from "@testing-library/react";

import Router from "next/router";
import Button from "./Button";

jest.mock("next/router", () => ({ push: jest.fn() }));

describe("Button component", () => {
  it("renders the button component", () => {
    const text = "New Button";
    const { getByText } = render(<Button label={text} />);
    expect(getByText(text)).toBeInTheDocument();
  });

  it("calls the onClick prop when a function is provided", () => {
    const text = "New Button";
    const testFunction = jest.fn();
    const { getByText } = render(
      <Button label={text} onClick={testFunction} />
    );

    fireEvent.click(getByText(text));

    expect(testFunction).toHaveBeenCalled();
  });

  it("pushes the correct route when a route is provided via props", () => {
    const props = {
      label: "Test",
      route: "test/one",
    };
    const { getByText } = render(<Button {...props} />);

    fireEvent.click(getByText(props.label));
    expect(Router.push).toHaveBeenCalled();
    expect(Router.push).toHaveBeenCalledWith("test/one");
  });
});

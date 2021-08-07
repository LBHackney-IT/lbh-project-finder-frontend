import { render, screen } from "@testing-library/react";
import Radios from "./Radios";

describe("Radios component", () => {
  const props = {
    name: "test",
    label: "New Radio",
    options: ["Option 1", "Option 2"],
    register: jest.fn(),
  };
  it("renders the correct fields if it is only strings", () => {
    render(<Radios {...props} />);

    expect(screen.getAllByRole("radio").length).toBe(2);
    expect(screen.getByText("New Radio"));
    expect(screen.getByText("Option 1"));
    expect(screen.getByText("Option 2"));
  });

  it("renders the correct fields if the options are objects", () => {
    const props = {
      name: "test",
      label: "New Radio",
      options: [
        { text: "Object Option 1", value: 1 },
        { text: "Object Option 2", value: 2 },
      ],
      register: jest.fn(),
    };
    render(<Radios {...props} />);

    expect(screen.getAllByRole("radio").length).toBe(2);
    expect(screen.getByText("New Radio"));
    expect(screen.getByText("Object Option 1"));
    expect(screen.getByText("Object Option 2"));
  });

  it("renders errors", () => {
    const testError = {
      type: "required",
      message: "test error",
    };

    render(<Radios {...props} error={testError} />);

    expect(screen.getByText("test error"));
  });
});

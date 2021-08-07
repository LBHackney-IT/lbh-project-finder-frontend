import { render, screen } from "@testing-library/react";
import ErrorSummary from "./ErrorSummary";

describe("ErrorSummary component", () => {
  const props = {
    title: "Error Summary",
    body: "test body",
    links: [
      { href: "test", text: "test" },
      { href: "testtwo", text: "testtwo" },
    ],
  };
  it("renders a title and body", () => {
    render(<ErrorSummary {...props} />);

    expect(screen.getByText("Error Summary"));
    expect(screen.getByText("test body"));
  });

  it("it renders links", () => {
    render(<ErrorSummary {...props} />);

    expect(screen.getByText("test"));
    expect(screen.getByText("testtwo"));
    expect(screen.getAllByRole("link").length).toBe(2);
  });

  it("should assign the role attribute", () => {
    render(<ErrorSummary {...props} role="complementary" />);

    expect(screen.getByRole("complementary"));
  });
});

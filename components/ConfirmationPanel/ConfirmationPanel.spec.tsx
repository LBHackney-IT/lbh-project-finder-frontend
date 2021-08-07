import { render, screen } from "@testing-library/react";
import ConfirmationPanel from "./ConfirmationPanel";

describe("ConfirmationPanel component", () => {
  it("renders with the default message if no success message is passed in", () => {
    render(<ConfirmationPanel />);

    expect(screen.getByText("Action complete"));
  });

  it("renders with the success message if it is passed in", () => {
    render(<ConfirmationPanel successMessage={"Custom message"} />);

    expect(screen.getByText("Custom message"));
  });
});

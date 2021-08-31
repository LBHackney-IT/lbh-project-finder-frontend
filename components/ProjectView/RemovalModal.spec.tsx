import { render, screen, fireEvent } from "@testing-library/react";
import RemovalModal from "./RemovalModal";

describe("RemovalModal component", () => {
  it("displays the title", () => {
    render(
      <RemovalModal
        title={"foo"}
        isOpen={true}
        onDismiss={jest.fn()}
        onFormSubmit={jest.fn()}

      />
    );

    expect(screen.getByText("foo"));
  });

  it("calls onFormSubmit when confirm button is clicked", () => {
    const submitFunction = jest.fn();
    render(
      <RemovalModal
        title={"foo"}
        isOpen={true}
        onDismiss={jest.fn()}
        onFormSubmit={submitFunction}
      />
    );

    fireEvent.click(screen.getByText("Yes, remove"));
    expect(submitFunction).toBeCalled();
  });

  it("calls onDismiss when cancel button is clicked", () => {
    const cancelFunction = jest.fn();
    render(
      <RemovalModal
        title={"foo"}
        isOpen={true}
        onDismiss={cancelFunction}
        onFormSubmit={jest.fn()}
      />
    );

    fireEvent.click(screen.getByText("Cancel"));
    expect(cancelFunction).toBeCalled();
  });
});

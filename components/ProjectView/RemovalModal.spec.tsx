import { render, screen, fireEvent } from "@testing-library/react";
import { mockedProjectLink } from "../../factories/projectLinks";
import { mockedProjectMember } from "../../factories/projectMembers";
import RemovalModal from "./RemovalModal";

describe("RemovalModal component", () => {
  it("displays the correct title if the item to be removed is a team member", () => {
    render(
      <RemovalModal
        isOpen={true}
        onDismiss={jest.fn()}
        onFormSubmit={jest.fn()}
        removalItem={mockedProjectMember}
      />
    );

    expect(screen.getByText("You are about to remove this team member"));
  });

  it("displays the correct title if the item to be removed is a link", () => {
    render(
      <RemovalModal
        isOpen={true}
        onDismiss={jest.fn()}
        onFormSubmit={jest.fn()}
        removalItem={mockedProjectLink}
      />
    );

    expect(screen.getByText("You are about to remove this link"));
  });

  it("calls onFormSubmit when confirm button is clicked", () => {
    const submitFunction = jest.fn();
    render(
      <RemovalModal
        isOpen={true}
        onDismiss={jest.fn()}
        onFormSubmit={submitFunction}
        removalItem={mockedProjectLink}
      />
    );

    fireEvent.click(screen.getByText("Yes, remove"));
    expect(submitFunction).toBeCalled();
  });

  it("calls onDismiss when cancel button is clicked", () => {
    const cancelFunction = jest.fn();
    render(
      <RemovalModal
        isOpen={true}
        onDismiss={cancelFunction}
        onFormSubmit={jest.fn()}
        removalItem={mockedProjectLink}
      />
    );

    fireEvent.click(screen.getByText("Cancel"));
    expect(cancelFunction).toBeCalled();
  });
});

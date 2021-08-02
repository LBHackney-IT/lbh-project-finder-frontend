import { render, screen } from "@testing-library/react";
import TextArea from "./TextArea";

describe("TextArea component", () => {
  const textAreaName = "textarea-1";
  const textAreaLabel = "My Text Area";
  const registerMock = jest.fn();

  it("renders correctly", () => {
    render(
      <TextArea
        name={textAreaName}
        label={textAreaLabel}
        register={registerMock}
      />
    );

    expect(screen.getByLabelText(textAreaLabel));
    expect(screen.getByRole("textbox"));
  });

  it("renders errors", () => {
    const testError = {
      type: "required",
      message: "test error",
    };

    render(
      <TextArea
        name={textAreaName}
        label={textAreaLabel}
        register={registerMock}
        error={testError}
      />
    );

    expect(screen.getByText("test error"));
  });
});

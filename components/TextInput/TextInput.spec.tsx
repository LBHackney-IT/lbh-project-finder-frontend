import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput component", () => {
  const inputName = "input-1";
  const inputLabel = "My Input";
  const registerMock = jest.fn();

  it("renders correctly", () => {
    render(
      <TextInput name={inputName} label={inputLabel} register={registerMock} />
    );

    expect(screen.getByLabelText(inputLabel));
    expect(screen.getByRole("textbox"));
  });

  it("renders errors", () => {
    const testError = {
      type: "required",
      message: "test error",
    };

    render(
      <TextInput
        name={inputName}
        label={inputLabel}
        register={registerMock}
        error={testError}
      />
    );

    expect(screen.getByText("test error"));
  });
});

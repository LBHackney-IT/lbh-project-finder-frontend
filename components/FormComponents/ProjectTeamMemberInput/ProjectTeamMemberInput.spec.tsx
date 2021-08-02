import { render, fireEvent, screen } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";
import ProjectTeamMemberInput from "./ProjectTeamMemberInput";

describe("ProjectLinksInput component", () => {
  const props = {
    name: "test",
    label: "foo",
  };
  it("renders no grouped inputs correctly", () => {
    const Component = () => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <ProjectTeamMemberInput {...props} />{" "}
        </FormProvider>
      );
    };
    render(<Component />);

    expect(screen.queryByRole("textbox")).toBeNull();
    expect(screen.getByText("Add Team member"));
    expect(screen.getByText("foo"));
  });

  it("allows an input group to be added", () => {
    const Component = () => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <ProjectTeamMemberInput {...props} />{" "}
        </FormProvider>
      );
    };
    render(<Component />);

    fireEvent.click(screen.getByText("Add Team member"));
    expect(screen.queryAllByRole("textbox").length).toBe(1);
    expect(screen.queryAllByRole("option").length).toBe(1);
  });

  it("allows an input group to be removed", () => {
    const Component = () => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <ProjectTeamMemberInput {...props} />{" "}
        </FormProvider>
      );
    };
    render(<Component />);

    fireEvent.click(screen.getByText("Add Team member"));
    expect(screen.queryAllByRole("textbox").length).toBe(1);

    fireEvent.click(screen.getByText("Remove"));
    expect(screen.queryAllByRole("textbox").length).toBe(0);
    expect(screen.queryAllByRole("option").length).toBe(0);
  });
});

import { render, screen, fireEvent, act } from "@testing-library/react";
import SearchByProjectDetails from "./SearchByProjectDetails";

describe("Search component", () => {
    const props = {
        onFormSubmit: jest.fn()
    }
    it("should pass the form values to onFormSubmit", async () => {
        render(<SearchByProjectDetails {...props} />);

        const projectNameInput = screen.getByLabelText("Project Name");
        fireEvent.change(projectNameInput, { target: { value: "something" } })

        await act(async () => {
            fireEvent.submit(screen.getByRole("form"));
        })

        expect(props.onFormSubmit).toHaveBeenCalledWith({ project_name: "something", size: "", phase: "" })
    })


})
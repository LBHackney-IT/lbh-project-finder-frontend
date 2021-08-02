import { render } from "@testing-library/react";
import { mockedProjects } from "../../factories/projects";
import ProjectsTable from "./ProjectsTable";

describe("ProjectsTable component", () => {
  const props = mockedProjects;
  it("should render a list of projects", () => {
    const { asFragment } = render(<ProjectsTable projects={props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

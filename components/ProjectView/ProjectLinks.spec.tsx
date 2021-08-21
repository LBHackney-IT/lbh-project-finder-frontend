import { render } from "@testing-library/react";
import { mockedProject } from "../../factories/projects";

import ProjectLinks from "./ProjectLinks";

describe("ProjectLinks component", () => {
  const props = mockedProject;

  it("should render a ProjectLinks component with the correct data", () => {
    const { asFragment } = render(<ProjectLinks project={props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from "@testing-library/react";

import Header from "./Header";

const mockedUseRouter = { pathname: "pathname" };

jest.mock("next/router", () => ({
  asPath: "path",
  useRouter: () => mockedUseRouter,
}));

jest.mock("./Logo", () => () => "MockedLogo");

describe("Header component", () => {
  const props = {
    serviceName: "test",
  };

  it("should render the service name", () => {
    const { getByText } = render(<Header {...props} />);
    expect(getByText("test")).toBeInTheDocument();
  });

  it("should render heading links", () => {
    const { getByText } = render(<Header {...props} />);

    expect(getByText("All Projects")).toBeInTheDocument();
    expect(getByText("My Projects")).toBeInTheDocument();
    expect(getByText("Sign Out")).toBeInTheDocument();
  });
});

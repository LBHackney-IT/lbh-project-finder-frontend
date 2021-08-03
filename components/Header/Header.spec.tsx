import { render } from "@testing-library/react";
import { mockedUser } from "../../factories/users";
import { UserContext } from "../UserContext/UserContext";

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
    const { getByText } = render(
      <UserContext.Provider value={{ user: mockedUser }}>
        <Header {...props} />
      </UserContext.Provider>
    );
    expect(getByText("test")).toBeInTheDocument();
  });

  it("should render heading links", () => {
    const { getByText } = render(
      <UserContext.Provider value={{ user: mockedUser }}>
        <Header {...props} />
      </UserContext.Provider>
    );

    expect(getByText("My projects")).toBeInTheDocument();
    expect(getByText("Sign out")).toBeInTheDocument();
  });
});

import { findByText, render, screen, waitFor } from "@testing-library/react";
import { mockedUser } from "../../factories/users";
import { User } from "../../types";
import { UserContext, AuthProvider, useAuth } from "./UserContext";

const mockedUseRouter = {
  pathname: "/test",
  push: jest.fn(),
};

jest.mock("next/router", () => ({
  useRouter: () => mockedUseRouter,
}));

describe("UserContext", () => {
  describe("AuthProvider", () => {
    it("should render its children components", async () => {
      render(
        <AuthProvider user={mockedUser}>
          <p>children</p>
        </AuthProvider>
      );
      const children = await screen.findByText("children");
      expect(children).toBeInTheDocument();
    });

    it("should redirect to /access-denied if user is logged in but is not authorised", async () => {
      render(
        <AuthProvider user={{ ...mockedUser, isAuthorised: false }}>
          <p>children</p>
        </AuthProvider>
      );

      await waitFor(() => {
        expect(mockedUseRouter.push).toHaveBeenCalled();
        expect(mockedUseRouter.push).toHaveBeenCalledWith("/access-denied");
      });
    });

    it("should redirect to /login if user is hasnt logged in", async () => {
      render(
        <AuthProvider>
          <p>children</p>
        </AuthProvider>
      );

      await waitFor(() => {
        expect(mockedUseRouter.push).toHaveBeenCalled();
        expect(mockedUseRouter.push).toHaveBeenCalledWith("/login");
      });
    });
  });

  describe("useAuth with UserContext", () => {
    it("should use the user context", async () => {
      const TestComponent = () => {
        const { user } = useAuth() as { user: User };
        return user ? <>{user.name}</> : null;
      };

      render(
        <UserContext.Provider value={{ user: mockedUser }}>
          <TestComponent />
        </UserContext.Provider>
      );

      expect(screen.getByText("guido")).toBeInTheDocument();
    });
  });
});

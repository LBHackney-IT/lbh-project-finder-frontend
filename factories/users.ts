import { Factory } from "fishery";

import { User } from "../types";

export const userFactory = Factory.define<User>(() => ({
  name: "guido",
  hasAdminPermissions: false,
  hasUserPermissions: true,
  email: "guido@bar.com",
  isAuthorised: true,
}));

export const mockedAdminUser = userFactory.build({
  hasAdminPermissions: true,
  hasUserPermissions: false,
});

export const mockedUser = userFactory.build();

import { Factory } from "fishery";
import { ProjectLink } from "../types";

export const projectLinkFactory = Factory.define<ProjectLink>(
  ({ sequence }) => ({
    id: sequence,
    project_id: sequence + 1,
    type: "Google Drive",
    link: "https://fakelink.com",
  })
);

export const mockedProjectLink = projectLinkFactory.build();
export const mockedProjectsLinks = [projectLinkFactory.build()];

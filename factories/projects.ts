import { Factory } from "fishery";
import { Project } from "../types";

export const projectFactory = Factory.define<Project>(({ sequence }) => ({
  id: sequence,
  projectName: "Test Project",
  description: "A project with many details",
  projectContact: "Someone",
  phase: "Discovery",
  size: "Large",
  category: "Tech",
  priority: "Extreme",
  productUsers: "Noone",
  dependencies: "none",
}));

export const mockedProject = projectFactory.build();
export const mockedProjects = [projectFactory.build()];

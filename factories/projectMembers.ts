import { Factory } from "fishery";
import { ProjectMember } from "../types";

export const projectMemberFactory = Factory.define<ProjectMember>(
  ({ sequence }) => ({
    id: sequence,
    member_id: sequence + 1,
    project_id: sequence + 2,
    project_member: "Some Person",
    role: "Developer",
  })
);

export const mockedProjectMember = projectMemberFactory.build();
export const mockedProjectsMembers = [projectMemberFactory.build()];

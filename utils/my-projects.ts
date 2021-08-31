import { AxiosError } from "axios";
import useSWR, { SWRResponse } from "swr";
import { ProjectMember, Project, SystemUser, User } from "../types";

interface MyProjectData extends SystemUser {
    projects: ProjectMember[];
    auth: User;
}

export const useMyProjects = (): SWRResponse<MyProjectData, AxiosError> => useSWR(`/api/my-projects`);
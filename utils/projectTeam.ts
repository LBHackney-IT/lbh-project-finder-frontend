import axios, { AxiosError } from "axios";
import useSWR, { SWRResponse } from "swr";
import { ProjectMember } from "../types";

export const useTeamMembers = (
  project_id: number
): SWRResponse<ProjectMember[], AxiosError> =>
  useSWR(`/api/projects/${project_id}/team`);

interface addNewTeamMemberData {
  project_id: number;
  user_id: number;
  project_role: string;
}

export const addTeamMember = async (
  formData: addNewTeamMemberData
): Promise<Record<string, string | number>> => {
  const { data } = await axios.post(
    `/api/projects/${formData.project_id}/team`,
    formData
  );
  return data;
};

export const removeTeamMember = async (
  project_id: number,
  team_member_id: number
): Promise<Record<string, string | number>> => {
  console.log(team_member_id)
  const { data } = await axios.delete(
    `/api/projects/${project_id}/team/${team_member_id}`
  );

  return data;
};

import axios, { AxiosError } from "axios";
import useSWR, { SWRResponse } from "swr";
import { ProjectLink } from "../types";

export const useProjectLinks = (
  projectId: number
): SWRResponse<ProjectLink[], AxiosError> =>
  useSWR(`/api/projects/${projectId}/links`);

interface addNewProjectLinkData {
  project_id: number;
  type: string;
  link: string;
}

export const addProjectLink = async (
  formData: addNewProjectLinkData
): Promise<Record<string, string | number>> => {
  const { data } = await axios.post(
    `/api/projects/${formData.project_id}/links`,
    formData
  );
  return data;
};

export const removeProjectLink = async (
  project_id: number,
  link_id: number
): Promise<Record<string, string | number>> => {
  const { data } = await axios.delete(
    `/api/projects/${project_id}/links/remove/${link_id}`
  );

  return data;
};

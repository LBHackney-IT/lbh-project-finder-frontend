import axios, { AxiosError } from "axios";
import useSWR, { SWRResponse } from "swr";
import { Project, ProjectSearchResults, SearchFormData } from "../types";

export const useProjects = async (
  params: SearchFormData
): Promise<ProjectSearchResults> => {
  const { data } = await axios.get(`/api/projects`, { params });
  return data;
};

export const useProject = (
  projectId: number
): SWRResponse<Project, AxiosError> => useSWR(`/api/projects/${projectId}`);

export const addProject = async (
  formData: Record<string, string>
): Promise<Record<string, string>> => {
  const { data } = await axios.post(`/api/projects`, formData);
  return data;
};

export const updateProject = async (
  projectId: number,
  formData: Record<string, string | number>
): Promise<Record<string, string>> => {
  const { data } = await axios.patch(`/api/projects/${projectId}`, formData);
  return data;
};

import axios, { AxiosError } from "axios";
import useSWR, { SWRResponse } from "swr";
import { Project } from "../types";

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

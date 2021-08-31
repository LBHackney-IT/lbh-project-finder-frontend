import axios from "axios";
import { Project, ProjectSearchResults, SearchFormData } from "../types";

const ENDPOINT_API = process.env.ENDPOINT_API;

export const getProjects = async (
  params: any
): Promise<ProjectSearchResults> => {
  const { data } = await axios.get(`${ENDPOINT_API}/projects`, {
    params: params,
  });

  return data;
};

export const getProject = async (projectId: number): Promise<Project> => {
  const { data } = await axios.get(`${ENDPOINT_API}/projects/${projectId}`);

  return data;
};

export const addProject = async (formData: Record<string, string>): Promise<any> => {
  const { data } = await axios.post(`${ENDPOINT_API}/projects`, formData)

  return data;
};

export const updateProject = async (formData: Record<string, string | number>): Promise<void> => {
  await axios.patch(`${ENDPOINT_API}/projects`, formData);
};

export const deleteProject = async (project_id: number): Promise<void> => {
  await axios.delete(`${ENDPOINT_API}/projects/${project_id}`);
}

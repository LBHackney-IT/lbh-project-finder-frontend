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

export const addProject = async (formData: any): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(console.log(`Form data is ${JSON.stringify(formData)}`)),
      1000
    );
  });
};

export const updateProject = async (formData: any): Promise<void> => {
  await axios.patch(`${ENDPOINT_API}/projects`, formData);
};

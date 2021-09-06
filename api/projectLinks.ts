import axios from "axios";
import { ProjectLink } from "../types";

const ENDPOINT_API = process.env.ENDPOINT_API;
const API_KEY = process.env.API_KEY;

const keyHeader = {
  'x-api-key': API_KEY
}

export const getLinksByProject = async (
  projectId: number
): Promise<ProjectLink[] | []> => {
  const { data } = await axios.get(`${ENDPOINT_API}/projects/${projectId}/links`, {
    headers: keyHeader,
  })

  return data
};

export const addProjectLink = async (
  project_id: number,
  formData: Record<string, string | number>
): Promise<void> => {
  const completeData = { project_id: project_id, ...formData }
  const { data } = await axios.post(`${ENDPOINT_API}/links`, completeData, {
    headers: keyHeader,
  })

  return data
};

export const removeProjectLink = async (link_id: number): Promise<void> => {
  await axios.delete(
    `${ENDPOINT_API}/links/${link_id}`,
    {
      headers: keyHeader,
    }
  );
};

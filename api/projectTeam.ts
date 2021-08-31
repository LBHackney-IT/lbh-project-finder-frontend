import axios from "axios";
import { ProjectMember } from "../types";

const ENDPOINT_API = process.env.ENDPOINT_API;

export const getTeamByProject = async (
  projectId: number
): Promise<ProjectMember[] | []> => {
  const { data } = await axios.get(`${ENDPOINT_API}/projects/${projectId}/team`, {
    // headers,
  })
  console.log(data)
  return data
};

export const addTeamMember = async (
  project_id: number,
  formData: Record<string, string | number>
): Promise<any> => {
  const { data } = await axios.post(`${ENDPOINT_API}/members`, formData, {
    // headers,
  })

  return data
};

export const removeTeamMember = async (
  team_member_id: number
): Promise<void> => {
  await axios.delete(
    `${ENDPOINT_API}/members/${team_member_id}`,
    {
      //headers,
    }
  );
};

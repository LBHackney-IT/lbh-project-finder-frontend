import axios from "axios";
import { ProjectMember } from "../types";

export const getTeamByProject = async (
  projectId: number
): Promise<ProjectMember[] | []> => {
  // const { data } = await axios.get(`/projects/${projectId}/team`, {
  //     headers,
  // })

  // return data

  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            member_id: 2,
            project_id: 1,
            project_member: "Joe Rogan",
            role: "Developer",
          },
        ]),
      3000
    );
  });
};

export const addTeamMember = async (
  project_id: number,
  formData: Record<string, string | number>
): Promise<any> => {
  // const { data } = await axios.post(`/projects/${project_id}/team`, formData, {
  //     headers,
  // })

  // return data

  return new Promise((resolve) => {
    setTimeout(
      () => resolve(console.log(`Form data is ${JSON.stringify(formData)}`)),
      1000
    );
  });
};

export const removeTeamMember = async (
  team_member_id: number
): Promise<void> => {
  // await axios.delete(
  //   `${ENDPOINT_API}/team/${team_member_id}`,
  //   {
  //     headers,
  //   }
  // );
};

import axios from "axios";
import { ProjectLink } from "../types";

export const getLinksByProject = async (
  projectId: number
): Promise<ProjectLink[] | []> => {
  // const { data } = await axios.get(`/projects/${projectId}/links`, {
  //     headers,
  // })

  // return data

  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            project_id: 2,
            type: "GitHub",
            link: "https://github.com/",
          },
        ]),
      3000
    );
  });
};

export const addProjectLink = async (
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

export const removeProjectLink = async (link_id: number): Promise<void> => {
  // await axios.delete(
  //   `${ENDPOINT_API}/links/${link_id}`,
  //   {
  //     headers,
  //   }
  // );
};

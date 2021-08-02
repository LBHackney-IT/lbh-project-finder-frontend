import axios from "axios";
import { Project } from "../types";

export const getProject = async (projectId: number): Promise<Project> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          project_id: projectId,
          project_name: "A new project",
          description: "a long description",
          size: "Large",
          stage: "Discovery",
          type: "Tech",
          project_links: [
            { name: "Google Drive", link: "fake link" },
            { name: "Github", link: "second fake link" },
          ],
          project_team: [
            { name: "someone", role: "Dev" },
            { name: "again someone", role: "Manager" },
          ],
        }),
      3000
    );
  });
};

export const addProject = async (formData: any): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(console.log(`Form data is ${JSON.stringify(formData)}`)),
      1000
    );
  });
};

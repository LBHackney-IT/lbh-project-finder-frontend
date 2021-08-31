import axios from "axios";

import { ProjectMember } from "../types";

const ENDPOINT_API = process.env.ENDPOINT_API;

export const getProjectsByUser = async (user_id: number): Promise<ProjectMember[] | []> => {
    const { data } = await axios.get(`${ENDPOINT_API}/user/${user_id}/projects`);
    console.log(data);
    return data;

};
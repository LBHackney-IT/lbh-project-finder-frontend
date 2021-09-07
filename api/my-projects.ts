import axios from "axios";

import { ProjectMember } from "../types";

const ENDPOINT_API = process.env.ENDPOINT_API;
const API_KEY = process.env.API_KEY;

const keyHeader = {
    'x-api-key': API_KEY
}

export const getProjectsByUser = async (user_id: number): Promise<ProjectMember[] | []> => {
    const { data } = await axios.get(`${ENDPOINT_API}/user/${user_id}/projects`, { headers: keyHeader });
    console.log(data);
    return data;

};
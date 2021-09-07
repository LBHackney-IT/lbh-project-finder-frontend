import axios from "axios";

import { SystemUser } from "../types";

const ENDPOINT_API = process.env.ENDPOINT_API;
const API_KEY = process.env.API_KEY;

const keyHeader = {
  'x-api-key': API_KEY
}

export const getUsers = async (): Promise<SystemUser[] | []> => {
  const { data } = await axios.get(`${ENDPOINT_API}/users`, { headers: keyHeader });

  return data;
};

export const getUserByEmail = async (email: string): Promise<SystemUser> => {
  const { data } = await axios.get(`${ENDPOINT_API}/users/email`, {
    headers: keyHeader,
    params: { email_address: email },
  });
  return data;
};

export const addUser = async (formData: SystemUser): Promise<SystemUser> => {
  const { data } = await axios.post(`${ENDPOINT_API}/users`, formData, {
    headers: keyHeader,
  });
  return data;
};

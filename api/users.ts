import axios from "axios";

import { SystemUser } from "../types";

const ENDPOINT_API = process.env.ENDPOINT_API;

export const getUserByEmail = async (email: string): Promise<SystemUser> => {
  const { data } = await axios.get(`${ENDPOINT_API}/users/email`, {
    params: { email_address: email },
  });
  return data;
};

export const addUser = async (formData: SystemUser): Promise<SystemUser> => {
  console.log(ENDPOINT_API);
  const { data } = await axios.post(`${ENDPOINT_API}/users`, formData, {
    headers: { "Content-Type": "application/json" },
  });
  return data;
};

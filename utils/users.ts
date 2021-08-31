import axios, { AxiosError } from "axios";
import useSWR, { SWRResponse } from "swr";
import { SystemUser } from "../types";

export const useUserByEmail = (
  email: string
): SWRResponse<SystemUser, AxiosError> =>
  useSWR(`/api/projects?email=${email}`);

export const addUser = async (
  formData: Record<string, string>
): Promise<Record<string, string>> => {
  const { data } = await axios.post(`/api/users`, formData);
  return data;
};

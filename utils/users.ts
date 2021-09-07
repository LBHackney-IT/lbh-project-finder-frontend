import axios, { AxiosError } from "axios";
import useSWR, { SWRResponse } from "swr";
import { SystemUser } from "../types";

export const useUsers = (): SWRResponse<SystemUser[], AxiosError> =>
  useSWR(`/api/users/get-all`);

export const useUserByEmail = (
  email: string | undefined
): SWRResponse<SystemUser, AxiosError> =>
  useSWR(email ? `/api/users?email=${email}` : null);

export const addUser = async (
  formData: Record<string, string>
): Promise<Record<string, string>> => {
  const { data } = await axios.post(`/api/users`, formData);
  return data;
};

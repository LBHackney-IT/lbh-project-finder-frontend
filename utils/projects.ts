import { AxiosError } from 'axios';
import useSWR, { SWRResponse } from 'swr';
import { Project } from '../types';

export const useProject = (
    projectId: number
): SWRResponse<Project, AxiosError> => useSWR(`/api/projects/${projectId}`);
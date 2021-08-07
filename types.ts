import { RegisterOptions } from "react-hook-form";

export interface Project {
  project_id: number;
  project_name: string;
  description: string;
  stage: string;
  size: string;
  type: string;
  project_dependencies?: string;
  project_links?: {
    name: string;
    link: string;
  }[];
  project_team?: {
    name: string;
    role: string;
  }[];
}

export interface GenericField {
  name: string;
  label?: string;
  hint?: string;
  rules?: RegisterOptions;
  register?: any;
  error?: {
    message?: string;
    type?: string;
  };
  required?: boolean | string;
  type?: string;
}

export interface User {
  name: string;
  email: string;
  hasAdminPermissions: boolean;
  hasUserPermissions: boolean;
  isAuthorised: boolean;
}

export interface SystemUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

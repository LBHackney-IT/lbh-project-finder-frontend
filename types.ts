import { RegisterOptions } from "react-hook-form";

export interface Project {
  id: number;
  projectName: string;
  description: string;
  projectContact: string;
  phase: string;
  size: string;
  category: string;
  priority: string;
  productUsers: string;
  dependencies?: string;
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
export interface ProjectLink {
  id: number;
  project_id: number;
  linkTitle: string;
  link: string;
}

export interface ProjectMember {
  id: number;
  projectId: number;
  projectName: string;
  memberName: string;
  projectRole: string;
}

export interface ProjectSearchResults {
  projects: Project[] | [];
  nextCursor: string;
}

export interface SearchFormData {
  project_name?: string;
  size?: string;
  phase?: string;
  cursor?: string;
}

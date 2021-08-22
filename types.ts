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
  type: string;
  link: string;
}

export interface ProjectMember {
  id: number;
  member_id: number;
  project_id: number;
  project_member: string;
  role: string;
}

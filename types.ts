export interface Project {
    project_id: number,
    project_name: string,
    description?: string,
    stage: string,
    size: string,
    type: string,
    project_dependencies?: string
}
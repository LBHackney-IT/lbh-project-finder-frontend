import { Factory } from 'fishery';
import { Project } from '../types';

export const projectFactory = Factory.define<Project>(({ sequence }) => ({
    project_id: sequence,
    project_name: "Test Project",
    description: "A project with many details",
    stage: "Discovery",
    size: "Large",
    type: "Tech",
    project_dependencies: "none",
    project_links: [{
        name: "Foo",
        link: "fake link"
    }
    ],
    project_team: [{ name: "Julius Caesar", role: "Delivery Manager" }]
}
));

export const mockedProject = projectFactory.build();
export const mockedProjects = [projectFactory.build()];
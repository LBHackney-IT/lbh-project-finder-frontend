import ProjectView from "../../../components/ProjectView/ProjectView";
import ProjectLinks from "../../../components/ProjectView/ProjectLinks";

const ProjectLinkPage = (): React.ReactElement => {
    return (
        <>
            <ProjectView projectId={1}>
                {(project) => (
                    <ProjectLinks project={project}></ProjectLinks>
                )}
            </ProjectView>
        </>
    );
};

export default ProjectLinkPage;

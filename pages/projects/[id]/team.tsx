import ProjectView from "../../../components/ProjectView/ProjectView";
import ProjectTeam from "../../../components/ProjectView/ProjectTeam";

const ProjectTeamPage = (): React.ReactElement => {
    return (
        <>
            <ProjectView projectId={1}>
                {(project) => (
                    <ProjectTeam project={project} />
                )}
            </ProjectView>
        </>
    );
};

export default ProjectTeamPage;

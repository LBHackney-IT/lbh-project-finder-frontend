import ProjectDetails from "../../../components/ProjectView/ProjectDetails";
import ProjectView from "../../../components/ProjectView/ProjectView";
import ProjectLinks from "../../../components/ProjectView/ProjectLinks";
import ProjectTeam from "../../../components/ProjectView/ProjectTeam";
import { useRouter } from "next/router";

const ProjectPage = (): React.ReactElement => {
  const { query } = useRouter();
  const projectId = Number(query.id);
  return (
    <>
      <ProjectView projectId={projectId}>
        {(project) => (
          <>
            <h2 className="lbh-heading-h2">Description</h2>
            <p className="lbh-body-m">{project.description}</p>
            <h2 className="lbh-heading-h2">Project details</h2>
            <ProjectDetails project={project}></ProjectDetails>
          </>
        )}
      </ProjectView>
    </>
  );
};

export default ProjectPage;
